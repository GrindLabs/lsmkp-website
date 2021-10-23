import datetime
import uuid
from enum import Enum

from flask_login import UserMixin
from lsmakeupstudio.api.schemas.profile import Profile as ProfileSchema
from lsmakeupstudio.models import GUID, db


class Roles(Enum):
    admin = 'admin'
    model = 'model'
    customer = 'customer'


class User(db.Model, UserMixin):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    uuid = db.Column(GUID(), nullable=False, unique=True, default=uuid.uuid4)
    token = db.Column(db.BINARY(60), unique=True)
    role = db.Column(db.Enum(Roles), nullable=False, default=Roles.customer)
    email = db.Column(db.String(255), nullable=False, unique=True)
    username = db.Column(db.String(25), nullable=False, unique=True)
    password = db.Column(db.BINARY(60), nullable=False)
    profile = db.Column(db.JSON)
    gateway = db.Column(db.JSON)
    gallery = db.relationship(
        'Media', backref=db.backref('user'), uselist=True)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.datetime.now)
    updated_at = db.Column(db.DateTime, onupdate=datetime.datetime.now)
