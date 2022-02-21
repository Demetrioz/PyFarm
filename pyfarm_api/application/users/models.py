from .. import db
from ..helpers.serializer import Serializer

class User(db.Model, Serializer):
  __tablename__ = "user"
  userId = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(255), nullable=False, unique=True)
  password = db.Column(db.String(255), nullable=False)
  email = db.Column(db.String(255), nullable=True)
  phone = db.Column(db.String(11), nullable=True)
  resetRequired = db.Column(db.Boolean, nullable=False)
  lastLogin = db.Column(db.DateTime, nullable=True)
  created = db.Column(db.DateTime, nullable=False)
  modified = db.Column(db.DateTime, nullable=False)
  isDeleted = db.Column(db.Boolean, nullable=False)