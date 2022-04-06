---
sidebar_position: 4
---

# Data Model

The PyFarm data model consists of the database tables needed to perform various
farm tasks and represent different types of objects. The tables can be split
into a number of "work areas" or business units as seen below.

## Authentication

Authentication tables are utilzed to keep track of users and roles within the
application

### User

The user table contains a list of all users within the PyFarm application

| Column Name   | Data Type   | Description                                       |
| ------------- | ----------- | ------------------------------------------------- |
| userId        | Int         | Primary Key                                       |
| username      | String(255) | The user's login name                             |
| password      | String(255) | The user's hashed and salted password             |
| email         | String(255) | The user's email address                          |
| phone         | String(11)  | The user's phone number                           |
| resetRequired | Bool        | Whether or not the user must reset their password |
| lastLogin     | DateTime    | The last time the user logged into the web app    |
| created       | DateTime    | When the user was created                         |
| modified      | DateTime    | When the user was last modified                   |
| isDeleted     | Bool        | A soft delete flag                                |
