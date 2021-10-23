from traceback import print_exc

from flask import current_app as app
from marshmallow.exceptions import ValidationError
from lsmakeupstudio.api.schemas.error import Error as ErrorSchema


def handle_http_exception(e):
    """Handle any error that inherits from HTTPException class

    Args:
        e (HTTPException): The HTTPException object

    Returns:
        string: JSON stringfied object
    """
    logger = app.config['LOGGER']
    logger.error('[%s] %s: %s', e.code, e.name, e.description)
    print_exc()
    return ErrorSchema().jsonify({'status': e.code, 'message': e.description}), e.code


def handle_unknown_exception(e):
    """Handle any error that inherist from Exception class

    Args:
        e (Exception): The Exception object

    Returns:
        string: JSON stringfied object
    """
    logger = app.config['LOGGER']
    logger.error(e)
    print_exc()

    if isinstance(e, ValidationError):
        return ErrorSchema().jsonify({'status': 400, 'message': e.messages[next(iter(e.messages))][0]}), 400

    return ErrorSchema().jsonify({'status': 500, 'message': 'Erro desconhecido.'}), 500
