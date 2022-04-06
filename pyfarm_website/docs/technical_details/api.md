---
sidebar_position: 2
---

# API

The PyFarm API has a number of endpoints that serve both the web app as
well as devices. A Postman collection and environment are available within the [repo](https://github.com/KTech-Industries/PyFarm)

## Tech Stack

- [Python](https://www.python.org/)
- [SqLite](https://www.sqlite.org/index.html)

## Dependencies

- [alembic](https://alembic.sqlalchemy.org/en/latest/)
- [flask](https://flask.palletsprojects.com/en/2.0.x/)
- [flask_cors](https://flask-cors.readthedocs.io/en/latest/)
- [flask_sqlalchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
- [pyjwt](https://pyjwt.readthedocs.io/en/stable/)
- [python-dotenv](https://pypi.org/project/python-dotenv/)

## DTO Definitions

### ApiResponse

**Purpose**: A standard response returned by all PyFarm API endpoints  
**Definition**:

```
{
  "data": list,
  "error": "string"
}
```

## Endpoint Definitions

### Login

**Purpose**: To authenticate and retrieve a jwt for use in other endpoints  
**Endpoint**: /api/auth/login  
**Authorization**: No  
**Methods**: POST  
**Body**:

```
{
  "username": "string",
  "password": "string"
}
```

### Password Reset

**Purpose**: Reset the current user's password  
**Endpoint**: /api/auth/password  
**Authorization**: Yes  
**Methods**: POST  
**Body**:

```
{
  "password": "string"
}
```
