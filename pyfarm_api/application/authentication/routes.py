import jwt
from datetime import datetime, timedelta
from flask import Blueprint, make_response, request
from os import environ

from .. import db
from ..decorators.authorize import authorize
from ..dtos.api_response import ApiResponse
from ..users.models import User

auth_bp = Blueprint(
  "auth_bp",
  __name__
)

@auth_bp.route("/api/auth/login", methods=["POST"])
def login():
  try:
    request_body = request.get_json()
    if not request_body["username"] or not request_body["password"]:
      raise Exception(
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
      raise Exception("Invalid username or password")

    user.lastLogin = datetime.now()
    db.session.commit()

    issuer = environ.get("ISSUER")
    audience = environ.get("AUDIENCE")
    secret = environ.get("SECRET_KEY")

    token_claims = {
      "sub": user.userId,
      "iss": issuer,
      "aud": audience,
      "iat": datetime.utcnow(),
      "exp": datetime.utcnow() + timedelta(minutes=60),
      "name": user.username,
      "email": user.email,
      "phone_number": user.phone,
      "resetRequired": user.resetRequired
    }

    token = jwt.encode(
      token_claims,
      secret,
      algorithm="HS256"
    )
    return ApiResponse.success([token])

  except Exception as ex:
    # TODO: Log the exception
    print(f"Error! {type(ex)} : {ex}")
    print(f"string error = {str(ex)}")
    return ApiResponse.failure(str(ex))

@auth_bp.route("/api/auth/password", methods=["POST"])
@authorize
def reset_password(user):
  try:
    request_body = request.get_json()

    db_user = User.query.\
      filter_by(
        userId = user.userId
      ).\
      first()

    db_user.password = request_body["password"]
    db_user.resetRequired = False
    db.session.commit()
    return ApiResponse.success([True])

  except Exception as ex:
    # TODO: Log the exception
    print(f"Error! {type(ex)} : {ex}")
    return ApiResponse.failure(str(ex))