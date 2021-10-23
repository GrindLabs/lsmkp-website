import hashlib
import os
import uuid
from functools import wraps
from tempfile import TemporaryDirectory
from time import time_ns
from zipfile import ZIP_BZIP2, ZipFile

import magic
from boto3.session import Session
from flask import current_app as app
from hashids import Hashids
from lsmakeupstudio.models.media import Media as MediaModel
from lsmakeupstudio.models.media import MediaKind as MediaKindEnum
from werkzeug.datastructures import FileStorage, Headers
from werkzeug.exceptions import BadRequest
from werkzeug.utils import secure_filename

session = Session()
client = session.client(
    app.config['DO_SPACES_SERVICE_NAME'],
    region_name=app.config['DO_SPACES_REGION_NAME'],
    endpoint_url=app.config['DO_SPACES_ENDPOINT_URL'],
    aws_access_key_id=app.config['DO_SPACES_KEY'],
    aws_secret_access_key=app.config['DO_SPACES_SECRET']
)


def kind_required(f):
    """Invoke `kind_required` function as decorator and test if the `kind` is allowed

    Args:
        f (func): The function which the decorator will act on

    Raises:
        BadRequest: If the `kind` is not allowed

    Returns:
        func: The decorated function
    """
    @wraps(f)
    def wrapper(*args, **kwargs):
        kind = kwargs.get('kind')

        if not kind \
                or kind.lower() == MediaKindEnum.pack.name \
                or kind.lower() == MediaKindEnum.doc.name \
                or not is_allowed_kind(kind):
            raise BadRequest('Categoria de arquivo inválida.')

        return f(*args, **kwargs)
    return wrapper


def sanitize(filename):
    """Secure and lower the file's name

    Args:
        filename (string): The file name

    Returns:
        string: The sanitized file name
    """
    return secure_filename(filename).lower()


def is_allowed(filename):
    """Verify if the file extension is allowed

    Args:
        filename (string): The file name

    Returns:
        bool: True if is valid, False otherwise
    """
    if filename:
        ext = os.path.splitext(filename)[1].lower()

        if ext in app.config['ALLOWED_EXTENSIONS']:
            return True

    return False


def is_valid(media):
    """Validate the media mimetype

    Args:
        media (FileStorage): Werkzeug's FileStorage object

    Returns:
        bool: True if the mimetype matches, False otherwise
    """
    header = media.read(2048)
    media.seek(0)
    mimetype = magic.from_buffer(header, True)
    logger = app.config['LOGGER']
    logger.debug('Extracted mimetype from file is "%s"' % mimetype)
    logger.debug('Original mimetype is "%s"' % media.mimetype)
    return media.mimetype == mimetype


def is_allowed_kinds(fields):
    """Verify the media kind of a list of file fields

    Args:
        fields (list): The list of file fields

    Returns:
        bool: True if all file fields are allowed, False otherwise
    """
    kinds = [x.name for x in MediaKindEnum]

    for field in fields:
        if not field.render_kw.get('data-kind') in kinds:
            return False

    return True


def is_allowed_kind(kind):
    """Verify if the requested kind is allowed

    Args:
        kind (string): The media kind

    Returns:
        bool: True if is allowed, False otherwise
    """
    return kind in [x.name for x in MediaKindEnum]


def assert_files(media_files):
    """Check the media files integrity and allowance

    Args:
        media_files (list): The list of media files

    Returns:
        list: The list with the verified files
    """
    allowed_files = []

    for media_file in media_files:
        if assert_file(media_file):
            allowed_files.append(media_file)

    return allowed_files


def assert_file(media_file):
    """Check a single media file integrity and allowance

    Args:
        media_file (FileStorage): The media file

    Returns:
        bool: True if it is valid, False otherwise
    """
    return is_allowed(media_file.filename) and is_valid(media_file)


def get_extension(filename):
    """Extract the extension from the file name (with dot)

    Args:
        filename (string): The file name

    Returns:
        string: The extension name starting with a dot or None otherwise
    """
    if filename:
        return os.path.splitext(filename)[1].lower()

    return None


def hash_filename(filename):
    """Patternize the file name using a hash instead of the original name

    Args:
        filename (string): The file name

    Returns:
        string: The hashed name with the extension
    """
    hashids = Hashids(min_length=app.config['DO_SPACES_MIN_NAME_LENGTH'])
    return '{0}{1}'.format(hashids.encode(len(filename) + time_ns()), get_extension(filename))


def generate_key(owner_uuid):
    """Generate the encryption key necessary to secure the files in AWS S3 Bucket

    Args:
        owner_uuid (string): The user's UUID

    Returns:
        string: The encryption key
    """
    key = '{0}{1}{2}'.format(
        app.config['SALT'], owner_uuid, app.config['PEPPER']).encode('utf-8')
    return hashlib.md5(key).hexdigest()


def compress_files(media_files):
    """Compress media files

    Args:
        media_files (list): A list of dicts

    Returns:
        FileStorage: The compressed media file
    """
    logger = app.config['LOGGER']

    if not os.path.isdir(app.config['TMP_FOLDER_ROOT_PATH']):
        os.mkdir(app.config['TMP_FOLDER_ROOT_PATH'])
        logger.debug('The root folder was created in {0}'.format(
            app.config['TMP_FOLDER_ROOT_PATH']))

    tmp_folder = TemporaryDirectory(prefix=app.config['TMP_FOLDER_PREFIX'])
    logger.debug('Temp folder: {}'.format(tmp_folder.name))
    zip_filename = '{0}{1}'.format(
        uuid.uuid4().hex, app.config['TMP_DEFAULT_COMPRESS_EXT'])
    zip_filepath = os.path.join(
        app.config['TMP_FOLDER_ROOT_PATH'], zip_filename)
    zip_file = ZipFile(zip_filepath, 'x',
                       compression=ZIP_BZIP2, compresslevel=9)

    for media in media_files:
        media_filename = hash_filename(media.filename)
        media_path = os.path.join(tmp_folder.name, media_filename)
        media.save(media_path)
        zip_file.write(media_path, media_filename)

    zip_file.close()
    tmp_folder.cleanup()
    compressed_file = open(zip_filepath, 'rb')
    headers = Headers()
    headers.add('Content-Type',
                app.config['TMP_DEFAULT_COMPRESS_CONTENT_TYPE'])
    return FileStorage(
        filename=zip_filename,
        stream=compressed_file.read(),
        headers=headers
    )


def upload(media, kind, owner):
    """Upload a single file to the AWS S3 Bucket

    Args:
        media (FileStorage): The media file to upload
        kind (string): The media kind
        owner (User): The User model object

    Returns:
        Model: SQLAlchemy's model
    """
    logger = app.config['LOGGER']
    new_filename = hash_filename(media.filename)
    file_path = app.config['DO_SPACES_DEFAULT_PATH'].format(
        owner.uuid,
        app.config['DO_SPACES_FOLDER_NAMES'][kind],
        new_filename
    )
    response = client.put_object(
        Bucket=app.config['DO_SPACES_BUCKET_NAME'],
        Key=file_path,
        ContentType=media.mimetype,
        Body=media.stream,
        ACL=app.config['DO_SPACES_ACL_PERMISSIONS'][kind]
    )
    logger.debug(response)
    return MediaModel(
        original=media.filename,
        filename=new_filename,
        mimetype=media.mimetype,
        kind=kind,
        path=file_path,
        model_profile_id=owner.model_profile.id
    )


def delete(media):
    return client.delete_object(
        Bucket=app.config['DO_SPACES_BUCKET_NAME'],
        Key=media.path
    )


def get_media_url(media):
    return client.generate_presigned_url(
        'get_object',
        {
            'Bucket': app.config['DO_SPACES_BUCKET_NAME'],
            'Key': media.path,
            'ResponseContentType': media.mimetype
        }
    )
