from marshmallow import Schema, fields, validate


class SocialNetwork(Schema):
    network = fields.Str(validate=validate.Length(max=20))
    profile_uri = fields.Str(validate=validate.Length(max=255))
