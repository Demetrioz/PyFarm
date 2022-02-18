# Project Information

## PyFarm Devices

PyFarm Devices can be used by themselves or

## PyFarm API

### Tech Stack

- [Python](https://www.python.org/)
- [SqLite](https://www.sqlite.org/index.html)

### Dependencies

- [alembic](https://alembic.sqlalchemy.org/en/latest/)
- [flask](https://flask.palletsprojects.com/en/2.0.x/)
- [flask_cors](https://flask-cors.readthedocs.io/en/latest/)
- [flask_sqlalchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
- [python-dotenv](https://pypi.org/project/python-dotenv/)

## PyFarm App

### Tech Stack

- [Node](https://nodejs.org/en/)
- [React](https://reactjs.org/)

### Dependencies

- [Material UI](https://mui.com/)
- [React-Redux](https://react-redux.js.org/)
- [React-Router-Dom](https://reactrouter.com/)
- [Notistack](https://iamhosseindhv.com/notistack)

## PyFarm Data Models

The actual table definitions for PyFarm can be found within the various
"models.py" files within the pyfarm_api/application/BUSINESS_AREA directories;
however, this area serves as an overall summary of the tables and what they're
used for.

### Authentication

#### User

The user table contains a list of all users within the PyFarm application

| Column Name   | Data Type   | Description                                       |
| ------------- | ----------- | ------------------------------------------------- |
| userId        | Int         | Primary Key                                       |
| username      | String(255) | The user's login name                             |
| password      | String(255) | The user's hashed and salted password             |
| resetRequired | Bool        | Whether or not the user must reset their password |
| created       | DateTime    | When the user was created                         |
| modified      | DateTime    | When the user was last modified                   |
| isDeleted     | Bool        | A soft delete flag                                |

## PyFarm Docs

The source files for this site's documentation resides in the docs directory,
and is created with [mkdocs](https://www.mkdocs.org/)

## PyFarm Migrations

Migrations for the PyFarm project utilize
[alembic](https://alembic.sqlalchemy.org/en/latest/) and can be found within
the pyfarm_api/migrations/versions directory

| Migration | Name              | Description                           |
| --------- | ----------------- | ------------------------------------- |
| 001       | Initial Migration | Creates the initial tables for PyFarm |
