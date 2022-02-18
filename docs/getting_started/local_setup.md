# Local Setup

## Clone the Repo

To get started, navigate to the repo on
[GitHub](https://github.com/KTech-Industries/PyFarm) and clone it to your local
machine

```
git clone https://github.com/KTech-Industries/PyFarm.git
cd PyFarm
```

## Setup the PyFarm Web App

If you don't have [node](https://nodejs.org/en/) installed on your system,
download and install that first. Then Navigate to pyfarm_app and install the
dependencies. Once the installation has completed, start the web app and go to
http://localhost:3000.

```
cd pyfarm_app
npm install
npm start
```

## Setup the PyFarm API

If you don't have [Python](https://www.python.org/) installed on your system,
download and install that first. Then, setup and activate a virtual environment.

```
cd pyfarm_api
python -m venv .venv
.venv\Scripts\activate
```

At this point, you should see the environment name in parentheses. You can now
install the dependencies in your virtual environment.

```
pip install -r requirements.txt
```

Once the requirements are installed, you'll need to run the migrations to create
the initial database

```
alembic upgrade head
```

You should see a "pyfarm.db" file inside of the pyfarm_api/application
directory. You can now start the web api and try logging in via the web app.

```
python ./wsgi.py
```
