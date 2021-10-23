from datetime import datetime

from dateutil.relativedelta import relativedelta
from marshmallow import Schema, fields


class Gateway(Schema):
    access_token = fields.Str(required=True)
    token_type = fields.Str(required=True)
    expires_in = fields.Int(required=True)
    scope = fields.Str(required=True)
    refresh_token = fields.Str(required=True)
    refresh_at = fields.Function(lambda obj: datetime.fromtimestamp(
        obj.expires_in) - relativedelta(month=1))
