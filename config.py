import logging.config
import os

import yaml
from dotenv import load_dotenv

# Load the environment file
load_dotenv()

# System settings
ENV = os.getenv('ENV')
SECRET_KEY = os.getenv('SECRET_KEY')
SALT = os.getenv('SALT')
PEPPER = os.getenv('PEPPER')
BASE_URL = os.getenv('BASE_URL')

# Logger settings
path = os.path.join(os.path.dirname(__file__), 'logger.yaml')

with open(path, 'r') as file:
    logging_config = yaml.safe_load(file)
    logging.config.dictConfig(logging_config)
    LOGGER = logging.getLogger(ENV)

# Site settings
SITE_SETTINGS = {
    'default_lang': 'pt-BR',
    'google_verification': '',
    'google_analytics': '',
    'title': 'Nude Drive',
    'subtitle': 'Entretenimento adulto',
    'description': 'Compra de packs',
    'keywords': 'nude drive, kinky, pack, pack do pezinho, pezinho, nude, conteudo adulto',
    'base_url': 'https://lsmakeupstudio.com.br',
    'name': 'Nude Drive',
    'favicon': '/static/assets/logo_initials.png',
    'logo': ''
}

# Upload settings
ALLOWED_EXTENSIONS = {
    'png',
    'jpg',
    'jpeg',
    'gif',
    'mp3',
    'mp4'
}
MAX_FILE_SIZE = 500
MAX_CONTENT_LENGTH = MAX_FILE_SIZE * 1024 * 1024

# SQLAlchemy settings
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI')
SQLALCHEMY_ECHO = ENV == 'development'

# Bcrypt settings
BCRYPT_LOG_ROUNDS = int(os.getenv('BCRYPT_LOG_ROUNDS'))
BCRYPT_HASH_PREFIX = os.getenv('BCRYPT_HASH_PREFIX')

# JSON Web Signature settings
JWS_TOKEN_EXPIRATION = 15552000
JWS_RECOVER_TOKEN_EXPIRATION = 86400

# HTTPAuth settings
HTTPAUTH_REALM = os.getenv('HTTPAUTH_REALM')

# Mailjet settings
MAILJET_API_KEY = os.getenv('MAILJET_API_KEY')
MAILJET_SECRET_KEY = os.getenv('MAILJET_SECRET_KEY')
MAILJET_DEFAULT_EMAIL = os.getenv('MAILJET_DEFAULT_EMAIL')
MAILJET_DEFAULT_NAME = 'PapoSacana'

# DigitalOcean Spaces settings
DO_SPACES_SERVICE_NAME = os.getenv('DO_SPACES_SERVICE_NAME')
DO_SPACES_REGION_NAME = os.getenv('DO_SPACES_REGION_NAME')
DO_SPACES_ENDPOINT_URL = os.getenv('DO_SPACES_ENDPOINT_URL')
DO_SPACES_BUCKET_NAME = os.getenv('DO_SPACES_BUCKET_NAME')
DO_SPACES_KEY = os.getenv('DO_SPACES_KEY')
DO_SPACES_SECRET = os.getenv('DO_SPACES_SECRET')
DO_SPACES_ENC_ALGORITHM = os.getenv('DO_SPACES_ENC_ALGORITHM')
DO_SPACES_ACL_PERMISSIONS = {
    'doc': 'private',
    'pack': 'private',
    'video': 'private',
    'audio': 'private',
    'image': 'private',
    'avatar': 'public-read'
}
DO_SPACES_FOLDER_NAMES = {
    'doc': 'docs',
    'pack': 'gallery',
    'video': 'gallery',
    'audio': 'gallery',
    'image': 'gallery',
    'avatar': 'avatars'
}
DO_SPACES_DEFAULT_PATH = 'media/{0}/{1}/{2}'
DO_SPACES_MIN_NAME_LENGTH = 40

# Bundle settings
ASSETS_DEBUG = ENV == 'development'
UGLIFYJS_BIN = os.path.join(os.path.dirname(
    __file__), '/lsmakeupstudio/static/vendor/uglify-js/bin/uglifyjs')

# Mercado Pago settings
MERCADO_PAGO_APP_ID = os.getenv('MERCADO_PAGO_APP_ID')
MERCADO_PAGO_SECRET_KEY = os.getenv('MERCADO_PAGO_SECRET_KEY')
MERCADO_PAGO_PUBLIC_KEY = os.getenv('MERCADO_PAGO_PUBLIC_KEY')
MERCADO_PAGO_ACCESS_TOKEN = os.getenv('MERCADO_PAGO_ACCESS_TOKEN')
MERCADO_PAGO_REDIRECT_URI = os.getenv('MERCADO_PAGO_REDIRECT_URI')
MERCADO_PAGO_AUTH_URI = os.getenv('MERCADO_PAGO_AUTH_URI')
MERCADO_PAGO_ACCESS_URI = os.getenv('MERCADO_PAGO_ACCESS_URI')
MERCADO_PAGO_ACCESS_PAYLOAD = os.getenv('MERCADO_PAGO_ACCESS_PAYLOAD')
MERCADO_PAGO_REFRESH_PAYLOAD = os.getenv('MERCADO_PAGO_REFRESH_PAYLOAD')

# API settings
API_MEDIA_MAX_FILES = 1
API_MEDIA_MAX_PER_PAGE = 100
API_MEDIA_DEFAULT_PAGE = 1
API_MEDIA_DEFAULT_LIMIT = 10
API_MEDIA_DEFAULT_ORDER = 'asc'

# Regex patterns
REGEX_PATTERN_EXTRACT_TAGS = r'#([\w\d]+)'
