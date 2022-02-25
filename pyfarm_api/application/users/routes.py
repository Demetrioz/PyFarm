from datetime import datetime
from flask import Blueprint, make_response, request

from .. import db
from ..decorators.authorize import authorize
from ..dtos.api_response import ApiResponse
from .models import User

user_bp = Blueprint(
  "user_bp",
  __name__
)

@user_bp.route("/api/users", methods=["GET"])
@authorize
def get_users(user):
  users = User.query.\
    filter_by(
      isDeleted = False
    ).\
    all()

  serialized_users = User.serialize_list(users)
  users_result = [
    {
      "userId": item["userId"],
      "username": item["username"],
      "email": item["email"],
      "phone": item["phone"],
      "created": item["created"],
      "lastLogin": item["lastLogin"],
    }
    for item
    in serialized_users
  ]

  return ApiResponse.success(users_result)

@user_bp.route("/api/users", methods=["POST"])
@authorize
def create_user(user):
  try:
    request_body = request.get_json()
    if not request_body["username"] or not request_body["password"]:
      raise Exception("Invalid object. Must contain username and password")

    new_user = User(
      username=request_body["username"], 
      password=request_body["password"],
      resetRequired=False,
      created=datetime.now(),
      modified=datetime.now(),
      isDeleted=False
    )

    db.session.add(new_user)
    db.session.commit()

    return ApiResponse.success([User.serialize(new_user)])
  except Exception as ex:
    # TODO: Log the exception
    print(f"Error! {type(ex)} : {ex}")
    return ApiResponse.failure("Unable to add user. Please try again")

@user_bp.route("/api/users/<int:user_id>", methods=["GET"])
@authorize
def get_user(user, user_id):
  db_user = User.query.\
    filter_by(
      userId = user_id
    ).\
    first()

  user_result = [User.serialize(db_user)] if db_user != None else []
  return ApiResponse.success(user_result)
