import datetime
import re


def regex_replace(s, find, replace):
    """Find and replace using regular expressions

    Args:
        s (string): The string containing the text whose be replaced
        find (string): The regex pattern
        replace (string): The string whose replace the pattern

    Returns:
        string: The new string
    """
    return re.sub(find, replace, s)


def elapsed_time(s):
    """Format the elapsed time since a post was published

    Args:
        s (string): The date and time when the post was created

    Returns:
        string: The formated elapsed time
    """
    now = datetime.datetime.now()
    created_at = datetime.datetime.strptime(s, '%Y-%m-%dT%H:%M:%S')
    elapsed = (now - created_at).total_seconds()

    minute = 60
    hour = minute * 60
    day = hour * 24
    month = day * 30
    year = month * 12

    if elapsed <= 1:
        return 'há pouco'
    elif elapsed < minute:
        return 'há {0} segundos'.format(round(elapsed)) if round(elapsed) > 1 else 'há 1 segundo'
    elif elapsed < hour:
        return 'há {0} minutos'.format(round(elapsed / minute)) if round(elapsed / minute) > 1 else 'há 1 minuto'
    elif elapsed < day:
        return 'há {0} horas'.format(round(elapsed / hour)) if round(elapsed / hour) > 1 else 'há 1 hora'
    elif elapsed < month:
        return 'há {0} dias'.format(round(elapsed / day)) if round(elapsed / day) > 1 else 'há 1 dia'
    elif elapsed < year:
        return 'há {0} meses'.format(round(elapsed / month)) if round(elapsed / month) > 1 else 'há 1 mês'

    return 'há {0} anos'.format(round(elapsed / year)) if round(elapsed / year) > 1 else 'há 1 ano'
