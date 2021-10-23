from marshmallow import Schema, fields, validate


class User(Schema):
    id = fields.Int()
    uuid = fields.UUID(required=True)
    token = fields.Str()
    role = fields.Str(required=True)
    email = fields.Email(
        validate=validate.And(
            validate.Length(max=255),
            validate.Email()
        ),
        required=True
    )
    username = fields.Str(validate=validate.Length(max=25), required=True)
    password = fields.Str(required=True)
    profile = fields.Nested('Profile', required=True)
    gateway = fields.Nested('Gateway')
    gallery = fields.Nested('Media', many=True)
    created_at = fields.DateTime(required=True)
    updated_at = fields.DateTime()
