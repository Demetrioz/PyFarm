from flask import Blueprint, jsonify, make_response, request
from flask import current_app as app

auth_bp = Blueprint(
  "auth_bp",
  __name__
)

@auth_bp.route("/api/auth/login", methods=["POST"])
def login():
  data = request.get_json()
  print(f"Data: {data}")
  return make_response({ "Data": data }, 200)