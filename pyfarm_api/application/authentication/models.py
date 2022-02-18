from .. import db

class User(db.Model):
  __tablename__ = "user"
  userId = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(255), nullable=False, unique=True)
  password = db.Column(db.String(255), nullable=False)
  resetRequired = db.Column(db.Boolean, nullable=False)
  created = db.Column(db.DateTime, nullable=False)
  modified = db.Column(db.DateTime, nullable=False)
  isDeleted = db.Column(db.Boolean, nullable=False)