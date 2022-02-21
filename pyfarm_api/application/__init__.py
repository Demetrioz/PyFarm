from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from os import environ
from dotenv import load_dotenv

db = SQLAlchemy()

def init_app():
  app = Flask(__name__, instance_relative_config=False)
  app.config.from_object("config.Config")

  load_dotenv("../.env")
  allowed_origins = environ.get("ORIGINS").split(",")
  
  CORS(app, origins=allowed_origins)

  db.init_app(app)

  with app.app_context():
    from .authentication import routes as authentication
    from .users import routes as users

    app.register_blueprint(authentication.auth_bp)
    app.register_blueprint(users.user_bp)
    
    return app