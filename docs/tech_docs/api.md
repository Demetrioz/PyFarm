# PyFarm API

The PyFarm API has a number of endpoints that serve both the PyFarm web app as
well as PyFarm devices.

A Postman collection and environment are available within the [repo]()

## DTOs

### ApiResponse

**Purpose**: A standard response returned by all PyFarm API endpoints  
**Definition**:

```
{
  "data": list,
  "error": "string"
}
```

## Authentication

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

## User Management

### Get Users

**Purpose**: Retrieve a list of all users  
**Endpoint**: /api/users  
**Authorization**: Yes  
**Methods**: GET

### Create User

**Purpose**: Create a new user  
**Endpoint**: /api/users  
**Authorization**: Yes  
**Methods**: POST  
**Body**:

```
{
  "username": "string",
  "password": "string"
}
```

### Get User

**Purpose**: Get a specific user  
**Endpoint**: /api/users/{id}  
**Authorization**: Yes  
**Methods**: GET  
**Parameters**:

- id (Int) - The id of the user you're wanting to retrieve data about
