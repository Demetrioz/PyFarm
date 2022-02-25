from functools import wraps
from flask import make_response, request
import jwt
from os import environ

from ..dtos.api_response import ApiResponse
from ..users.models import User

def authorize(function):
  @wraps(function)
  def decorator(*args, **kwargs):
    if "Authorization" in request.headers:
      try:
        bearer = request.headers["Authorization"]
        token = bearer.replace("Bearer ", "")

        issuer = environ.get("ISSUER")
        audience = environ.get("AUDIENCE")
        secret = environ.get("SECRET_KEY")

        decode_options = dict(
          verify_signature=True,
          verify_aud=True,
          verify_iss=True,
          verify_exp=True,
          require=["sub", "iss", "aud", "iat", "exp"],
        )

        data = jwt.decode(
          token, 
          key=secret, 
          algorithms=["HS256"],
          options=decode_options,
          audience=audience,
          issuer=issuer
        )

        user = User.query.\
          filter_by(
            userId = data["sub"],
            username = data["name"],
            email = data["email"],
            phone = data["phone_number"]
          ).\
          first()
        
        if user == None:
          raise Exception(f"Specified user does not exist: {data}")

        return function(user, *args, **kwargs)

      except Exception as ex:
        # TODO: Log the error
        print(f"Error! {type(ex)} : {ex}")
        return ApiResponse.unauthorized()
    else:
      return ApiResponse.unauthorized()

  return decorator