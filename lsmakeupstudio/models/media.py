import datetime
import uuid
from enum import Enum

from lsmakeupstudio.models import GUID, db, media_has_tag
from lsmakeupstudio.models.tag import Tag as TagModel


class MediaKind(Enum):
    doc = 'doc'
    pack = 'pack'
    avatar = 'avatar'
    video = 'video'
    audio = 'audio'
    image = 'image'


class Media(db.Model):
    __tablename__ = 'media'
    id = db.Column(db.Integer, primary_key=True)
    media_id = db.Column(db.Integer, db.ForeignKey('media.id'), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    uuid = db.Column(GUID(), nullable=False, unique=True, default=uuid.uuid4)
    original = db.Column(db.String(255), nullable=False)
    filename = db.Column(db.String(45), nullable=False)
    mimetype = db.Column(db.String(30), nullable=False)
    kind = db.Column(db.Enum(MediaKind), nullable=False)
    path = db.Column(db.String(255), nullable=False)
    pack = db.relationship('Media', backref=db.backref(
        'cover', remote_side=[id]), uselist=True)
    tags = db.relationship(
        TagModel, uselist=True, secondary=media_has_tag, back_populates='gallery', lazy=True)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.datetime.now)
