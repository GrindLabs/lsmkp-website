from werkzeug.exceptions import NotFound


class FileNotFound(NotFound):
    """File not found in the database"""
    description = 'Nenhum arquivo encontrado'
