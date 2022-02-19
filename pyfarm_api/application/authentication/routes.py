import jwt
from datetime import datetime, timedelta
from flask import Blueprint, jsonify, make_response, request
from flask import current_app as app
from os import environ

from ..dtos.api_response import ApiResponse
from .. import db
from .models import User

auth_bp = Blueprint(
  "auth_bp",
  __name__
)

@auth_bp.route("/api/auth/login", methods=["POST"])
def login():
  try:
    request_body = request.get_json()
    if not request_body["username"] or not request_body["password"]:
      raise RuntimeError(
        "Invalid request object. Must contain username and password"
      )

    user = User.query.\
      filter_by(
        username = request_body["username"], 
        password = request_body["password"]
      ).\
      first()

    if (
      user == None 
      or user.username == "Administrator" 
      and user.resetRequired == True 
      and user.lastLogin != None
    ):
      raise RuntimeError("Invalid username or password")

    user.lastLogin = datetime.now()
    db.session.commit()

    token_claims = {
      "sub": user.userId,
      "name": user.username,
      "email": user.email,
      "phone_number": user.phone,
      "exp": datetime.now() + timedelta(minutes=60),
      "resetRequired": user.resetRequired
    }

    token = jwt.encode(
      token_claims,
      environ.get("SECRET_KEY"),
      "HS256"
    )
    response = ApiResponse(data=[token], error=None).to_json()
    
    return make_response(response, 200)

  except Exception as ex:
    # TODO: Log the exception
    return make_response("Invalid", 401)