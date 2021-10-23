from flask import Blueprint
from lsmakeupstudio.api.handlers import (handle_http_exception,
                                     handle_unknown_exception)
from werkzeug.exceptions import HTTPException, NotFound

api = Blueprint('api', __name__, url_prefix='/api')

api.register_error_handler(HTTPException, handle_http_exception)
api.register_error_handler(NotFound, handle_http_exception)
api.register_error_handler(Exception, handle_unknown_exception)
