from marshmallow import Schema, fields


class Error(Schema):
    status = fields.Int(required=True)
    message = fields.Str(required=True)
    error = fields.Bool(default=True)
