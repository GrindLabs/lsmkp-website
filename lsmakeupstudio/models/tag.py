import datetime

from lsmakeupstudio.models import db, media_has_tag


class Tag(db.Model):
    __tablename__ = 'tag'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    gallery = db.relationship(
        'Media', uselist=True, secondary=media_has_tag, back_populates='tags', lazy=True)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.datetime.now)
