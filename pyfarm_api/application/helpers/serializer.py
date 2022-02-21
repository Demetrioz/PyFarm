from datetime import datetime
from sqlalchemy.inspection import inspect

class Serializer(object):
  def serialize(self):
    serialized_values =  { 
      key: getattr(self, key) 
      for key 
      in inspect(self).attrs.keys() 
    }

    for key in serialized_values:
      if type(serialized_values[key]) == datetime:
        serialized_values[key] = str(serialized_values[key])

    return serialized_values

  @staticmethod
  def serialize_list(list):
    return [ item.serialize() for item in list ]