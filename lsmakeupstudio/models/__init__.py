import uuid

from lsmakeupstudio import db
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.types import CHAR, TypeDecorator

# Mapping table between Tag and Media in a Many-to-Many Relationship
media_has_tag = db.Table(
    'media_has_tag',
    db.metadata,
    db.Column('media_id', db.Integer),
    db.Column('media_user_id', db.Integer),
    db.Column('tag_id', db.Integer, db.ForeignKey(
        'tag.id', ondelete='cascade')),
    db.ForeignKeyConstraint(
        ('media_id', 'media_user_id'),
        ('media.id', 'media.user_id'),
        ondelete='cascade'
    )
)


class GUID(TypeDecorator):
    """Platform-independent GUID type.

    Uses PostgreSQL's UUID type, otherwise uses
    CHAR(32), storing as stringified hex values.

    """
    impl = CHAR

    def load_dialect_impl(self, dialect):
        if dialect.name == 'postgresql':
            return dialect.type_descriptor(UUID())
        else:
            return dialect.type_descriptor(CHAR(32))

    def process_bind_param(self, value, dialect):
        if value is None:
            return value
        elif dialect.name == 'postgresql':
            return str(value)
        else:
            if not isinstance(value, uuid.UUID):
                return "%.32x" % uuid.UUID(value).int
            else:
                return "%.32x" % value.int

    def process_result_value(self, value, dialect):
        if value is None:
            return value
        else:
            if not isinstance(value, uuid.UUID):
                value = uuid.UUID(value)
            return value
