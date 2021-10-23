import lsmakeupstudio.utils.api as APIUtils
import lsmakeupstudio.utils.storage as StorageUtils
from flask import current_app as app
from flask import jsonify, request
from flask.views import MethodView
from flask_login import current_user
from flask_login.utils import login_required
from lsmakeupstudio.api.exceptions import FileNotFound
from lsmakeupstudio.api.schemas.media import MediaSource as MediaSourceSchema
from lsmakeupstudio.models import db
from lsmakeupstudio.models.media import Media as MediaModel
from sqlalchemy import text
from werkzeug.exceptions import BadRequest


class Media(MethodView):
    decorators = [login_required, StorageUtils.kind_required]

    def get(self, kind=None, uuid=None):
        if uuid:
            media = MediaModel.query \
                .filter_by(
                    model_profile_id=current_user.model_profile.id,
                    kind=kind,
                    uuid=uuid
                ).first()

            if not media:
                raise FileNotFound()

            return MediaSourceSchema().dump(media)

        page, limit, order = APIUtils.get_pagination(request.args)
        media_list = MediaModel.query \
            .filter_by(model_profile_id=current_user.model_profile.id, kind=kind) \
            .order_by(text('created_at {0}'.format(order))) \
            .paginate(page, limit, False, app.config['API_MEDIA_MAX_PER_PAGE']) \
            .items

        if not media_list:
            raise FileNotFound()

        return jsonify(MediaSourceSchema(many=True).dump(media_list))

    def post(self, kind=None):
        media_file = request.files.get(kind)

        if not media_file or not StorageUtils.assert_file(media_file):
            raise BadRequest('Arquivo inválido.')

        saved_file = StorageUtils.upload(media_file, kind, current_user)
        db.session.add(saved_file)
        db.session.commit()
        return MediaSourceSchema().dump(saved_file)

    def delete(self, kind, uuid):
        media = MediaModel.query \
            .filter_by(
                model_profile_id=current_user.model_profile.id,
                kind=kind,
                uuid=uuid
            ).first()

        if not media:
            raise FileNotFound()

        if not StorageUtils.delete(media):
            raise BadRequest('Não foi possível remover o arquivo de mídia.')

        db.session.delete(media)
        db.session.commit()
        return jsonify(), 204


# import lsmakeupstudio.utils.storage as StorageUtils
# from flask import Blueprint
# from flask import current_app as app
# from flask import jsonify, request
# from lsmakeupstudio import db
# from lsmakeupstudio.api.schemas.media import MediaItem as MediaItemSchema
# from lsmakeupstudio.api.schemas.media import MediaSource as MediaSourceSchema
# from lsmakeupstudio.api.views import auth
# from lsmakeupstudio.models.media import Media as MediaModel
# from lsmakeupstudio.models.media import MediaKind as MediaKindEnum
# from werkzeug.exceptions import BadRequest, NotFound

# media = Blueprint('media', __name__, url_prefix='/media')


# @media.route('/<kind>/<uuid>', methods=['GET'])
# @auth.login_required
# def get(kind, uuid):
#     if kind == 'pack':
#         raise BadRequest('A pack can not be accessed as a media file')

#     user = auth.current_user()
#     media = MediaModel.query.filter_by(
#         kind=kind, uuid=uuid, model_profile=user.model_profile).first()

#     if not media:
#         raise BadRequest('Unable to find the required media file')

#     return MediaSourceSchema().dump({
#         'filename': media.filename,
#         'mimetype': media.mimetype,
#         'kind': MediaKindEnum[kind],
#         'src': StorageUtils.get_media_url(media)
#     })


# @media.route('/<kind>', methods=['POST'])
# @auth.login_required
# def post(kind):
#     logger = app.config['LOGGER']
#     user = auth.current_user()

#     if not StorageUtils.is_allowed_kind(kind, request.files.keys()):
#         raise BadRequest('Invalid kind of media')

#     media_files = StorageUtils.assert_files(request.files.getlist(kind))
#     logger.debug('Total valid files uploaded: {}'.format(len(media_files)))

#     if not media_files:
#         raise BadRequest('There is no file with valid extension')

#     if kind == 'pack':
#         compressed_file = StorageUtils.compress_files(media_files)
#         media = StorageUtils.upload(compressed_file, kind, user)
#         db.session.add(media)
#         db.session.commit()
#         return MediaItemSchema().dump(media)

#     saved_files = []

#     for media in media_files:
#         new_filename = StorageUtils.hash_filename(media.filename)
#         saved_file = StorageUtils.upload(media, kind, user, new_filename)
#         saved_files.append(saved_file)
#         db.session.add(saved_file)

#     db.session.commit()

#     return jsonify(MediaItemSchema(many=True).dump(saved_files))


# @media.route('/<kind>/<uuid>', methods=['PUT'])
# @auth.login_required
# def put(kind, uuid):
#     raise NotFound()


# @media.route('/<kind>/<uuid>', methods=['DELETE'])
# @auth.login_required
# def delete(kind, uuid=None):
#     logger = app.config['LOGGER']
#     user = auth.current_user()
#     media = MediaModel.query.filter_by(
#         kind=kind, uuid=uuid, model_profile=user.model_profile).first()

#     if not media:
#         raise NotFound('The media file was already deleted')

#     logger.debug(StorageUtils.delete(media))
#     db.session.delete(media)
#     db.session.commit()
#     return jsonify(), 204
