from flask import current_app as app


def get_pagination(query_params={}):
    """Get the pagination variables from the query parameters

    Args:
        query_params (dict): The query parameters

    Returns:
        Tuple: page, limit, and order variables
    """
    page = query_params.get('page', app.config['API_MEDIA_DEFAULT_PAGE'])
    limit = query_params.get('limit', app.config['API_MEDIA_DEFAULT_LIMIT'])
    order = query_params.get('order', app.config['API_MEDIA_DEFAULT_ORDER'])
    return page, limit, order
