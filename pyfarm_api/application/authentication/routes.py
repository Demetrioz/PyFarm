from flask import Blueprint, jsonify, make_response, request
from flask import current_app as app

from .. import db
from .models import User

auth_bp = Blueprint(
  "auth_bp",
  __name__
)

@auth_bp.route("/api/auth/login", methods=["POST"])
def login():
  data = request.get_json()
  print(f"Data: {data}")
  users = User.query.all()
  return make_response(
    { 
      "Data": [
        {
          "Id": user.userId,
          "name": user.username
        }
        for user in users
        if not user.isDeleted
      ]
    }, 
    200
  )