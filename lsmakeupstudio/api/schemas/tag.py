from marshmallow import Schema, fields, validate


class Tag(Schema):
    id = fields.Int()
    name = fields.Str(validate=validate.Length(max=255), required=True)
    gallery = fields.Nested('Media', many=True)
    created_at = fields.DateTime(required=True)
