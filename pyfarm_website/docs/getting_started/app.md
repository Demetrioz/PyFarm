---
sidebar_position: 2
---

# Web App

The PyFarm web app is the farm management aspect of PyFarm. It contains a Python
web api and a React frontend that can be hosted on a Raspberry Pi, in the cloud,
or in a docker container.

## Requirements

Before continuing, ensure you have the following on your local system:

- [Node](https://nodejs.org/en/)
- [Python](https://www.python.org/)

## Clone the Repo

To get started, navigate to the repo on
[GitHub](https://github.com/KTech-Industries/PyFarm) and clone it to your local
machine

```
git clone https://github.com/KTech-Industries/PyFarm.git
```

## Start the API

To run the API, you'll want to start a virtual environment and install the
needed dependencies

```
cd pyfarm_api
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

Next, run the migrations to create an initial SQLite database

```
alembic upgrade head
```

You should see a "pyfarm.db" file inside of the pyfarm_api/application
directory. You can now start the web api.

```
python ./wsgi.py
```

## Start the Frontend

To run the web app, you'll need to install the dependencies and then start the
React app.

```
cd pyfarm_app
npm install
npm start
```

At this point, the login screen should load, and you can try logging in as the
admin user.
