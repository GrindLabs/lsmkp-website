from marshmallow import Schema, fields, validate


class Address(Schema):
    street = fields.Str(validate=validate.Length(max=255))
    number = fields.Int(validate=validate.Length(max=10))
    complement = fields.Str(validate=validate.Length(max=255))
    zipcode = fields.Str(validate=validate.Length(max=8))
    city = fields.Str(validate=validate.Length(max=50))
    state = fields.Str(validate=validate.Length(max=2))
    country = fields.Str(validate=validate.Length(max=50))
