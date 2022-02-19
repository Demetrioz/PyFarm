# Project Information

## PyFarm Devices

PyFarm Devices can be used by themselves or in conjuction with the web app and
web api. For detailed information on the various devices, view the technical
information for them [here](../tech_docs/devices.md)

## PyFarm API

### Tech Stack

- [Python](https://www.python.org/)
- [SqLite](https://www.sqlite.org/index.html)

### Dependencies

- [alembic](https://alembic.sqlalchemy.org/en/latest/)
- [flask](https://flask.palletsprojects.com/en/2.0.x/)
- [flask_cors](https://flask-cors.readthedocs.io/en/latest/)
- [flask_sqlalchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
- [pyjwt](https://pyjwt.readthedocs.io/en/stable/)
- [python-dotenv](https://pypi.org/project/python-dotenv/)

## PyFarm App

### Tech Stack

- [Node](https://nodejs.org/en/)
- [React](https://reactjs.org/)

### Dependencies

- [jwt-decode](https://github.com/auth0/jwt-decode)
- [lodash](https://lodash.com/)
- [Material UI](https://mui.com/)
- [Notistack](https://iamhosseindhv.com/notistack)
- [React-Redux](https://react-redux.js.org/)
- [React-Router-Dom](https://reactrouter.com/)

## PyFarm Data Models

The actual table definitions for PyFarm can be found within the various
"models.py" files within the pyfarm_api/application/BUSINESS_AREA directories.
For detailed information about the database, view the technical information for
the [data model](../tech_docs/data.md);

## PyFarm Docs

The source files for this site's documentation resides in the docs directory,
and is created with [mkdocs](https://www.mkdocs.org/)

## PyFarm Migrations

Migrations for the PyFarm project utilize
[alembic](https://alembic.sqlalchemy.org/en/latest/) and can be found within
the pyfarm_api/migrations/versions directory. For the current list of
migrations, view the technical information for the
[migrations](../tech_docs/migrations.md)
