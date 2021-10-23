from marshmallow import Schema, fields, validate


class Document(Schema):
    type = fields.Str(validate=validate.Length(max=10))
    number = fields.Str(validate=validate.Length(max=20))
