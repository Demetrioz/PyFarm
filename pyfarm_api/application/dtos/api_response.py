import json

class ApiResponse():
  def __init__(self, data: list, error: str) -> None:
      self.data = data
      self.error = error

  def to_json(self):
    return json.dumps(self, default=lambda obj: obj.__dict__)