from enum import Enum

from marshmallow import Schema, fields, validate
from marshmallow_enum import EnumField


class Genre(Enum):
    man = 'man'
    woman = 'woman'
    intersex = 'intersex'
    transwoman = 'transwoman'
    transman = 'transman'
    trans = 'trans'
    nb = 'nb'


class Orientation(Enum):
    asex = 'asex'
    gay = 'gay'
    lesb = 'lesb'
    bisex = 'bisex'
    pansex = 'pansex'
    polisex = 'polisex'
    straight = 'straight'


class Profile(Schema):
    first_name = fields.Str(validate=validate.Length(2, 20))
    last_name = fields.Str(validate=validate.Length(2, 20))
    nickname = fields.Str(validate=validate.Length(2, 20))
    bio = fields.Str(validate=validate.Length(max=150))
    birthday = fields.Date()
    genre = EnumField(Genre)
    orientation = EnumField(Orientation)
    phone = fields.Str(validate=validate.Length(max=11))
    address = fields.Nested('Address')
    social_networks = fields.Nested('SocialNetwork', many=True)
    document = fields.Nested('Document')
    settings = fields.Nested('Settings')
