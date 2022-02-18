from flask import Flask
from flask_cors import CORS

def init_app():
  app = Flask(__name__, instance_relative_config=False)
  app.config.from_object("config.Config")
  CORS(app, origins=[""])

  with app.app_context():
    from .authentication import routes as authentication

    app.register_blueprint(authentication.auth_bp)
    
    return app