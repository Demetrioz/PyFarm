---
sidebar_position: 5
---

# Project Structure

The source code for PyFarm can be found on
[GitHub](https://github.com/KTech-Industries/PyFarm) and contains the following
directory structure:

```
PyFarm
  - devices
  - pyfarm_api
  - pyfarm_app
  - pyfarm_website
```

## devices

The devices directory contains a collection of various microcontroller devices
that can be used to help automate and collect information about your farm or
garden. Each device has a parts list, the source code, and additional
information about how to get started.

## pyfarm_api

The pyfarm_api directory contains all of the code relating to the PyFarm API,
and is written in Python / Flask. You will also find table definitions in this
directory.

## pyfarm_app

The pyfarm_app directory contains all of the code for the web application, and
is written in Javascript / React.

## pyfarm_website

The pyfarm_website directory contains the code for this website and utilizes
[docusaurus](https://docusaurus.io/)
