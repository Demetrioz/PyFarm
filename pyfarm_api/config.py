from os import environ, path
from dotenv import load_dotenv

base_dir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(base_dir, ".env"))

class Config:
  DEBUG = bool(environ.get("DEBUG"))

  # Database
  SQLALCHEMY_DATABASE_URI = environ.get("SQLALCHEMY_DATABASE_URI")
  SQLALCHEMY_ECHO = bool(environ.get("SQLALCHEMY_ECHO"))
  SQLALCHEMY_TRACK_MODIFICATIONS = bool(environ.get("SQLALCHEMY_TRACK_MODIFICATIONS"))

  # Authentication
  SECRET_KEY = environ.get("SECRET_KEY")
