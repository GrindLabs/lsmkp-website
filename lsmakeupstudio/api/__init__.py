from lsmakeupstudio.api.views import api
from lsmakeupstudio.api.views.media import Media as MediaAPI

media_api = MediaAPI.as_view('media')
api.add_url_rule('/media/<kind>', view_func=media_api, methods=['GET', 'POST'])
api.add_url_rule('/media/<kind>/<uuid>', view_func=media_api,
                 methods=['GET', 'DELETE'])
