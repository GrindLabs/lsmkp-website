import lsmakeupstudio.utils.storage as StorageUtils
from marshmallow import Schema, fields, validate


class Media(Schema):
    id = fields.Int()
    uuid = fields.UUID(required=True)
    original = fields.Str(validate=validate.Length(max=255), required=True)
    filename = fields.Str(validate=validate.Length(max=45), required=True)
    mimetype = fields.Str(validate=validate.Length(max=30), required=True)
    kind = fields.Str(required=True)
    path = fields.Str(validate=validate.Length(max=255))
    pack = fields.Nested('Media', many=True)
    cover = fields.Nested('Media')
    tags = fields.Nested('Tag', many=True)
    user = fields.Nested('User')
    created_at = fields.DateTime(required=True)


class MediaItem(Media):
    class Meta:
        fields = ('uuid', 'filename', 'mimetype', 'kind', 'path', 'created_at')


class MediaSource(Media):
    class Meta:
        fields = ('uuid', 'filename', 'mimetype', 'kind', 'src')

    src = fields.Function(lambda obj: StorageUtils.get_media_url(obj))
