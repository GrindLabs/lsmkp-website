from urllib.parse import urljoin, urlparse


def is_safe_url(request, target):
    """Check if the URL has no tricks

    Args:
        request (Request): The Request object from requests library
        target (string): The URL to redirect to

    Returns:
        bool: True if the URL is safe, False otherwise
    """
    ref_url = urlparse(request.host_url)
    test_url = urlparse(urljoin(request.host_url, target))
    return test_url.scheme in ('http', 'https') and ref_url.netloc == test_url.netloc
