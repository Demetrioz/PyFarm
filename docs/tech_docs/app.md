# PyFarm Web App

The PyFarm web app is used to manage and maintain your farm.

## State Management

PyFarm uses Redux for application state management, but also makes use of the
useState hook for internal component state.

### User State

**Purpose**: Holds information about the user to tell if an individual is logged
in and determine what access they have within the application.  
**Default State**:

```
{
    sub: null,
    email: null,
    name: null,
    phone_number: null,
    resetRequired: null,
    exp: null
}
```

**Reducers**:

- setUser(token) - Sets the user state to the provided decrypted jwt

### Notification State

**Purpose**: Maintain a list of dialogs and notifications that should be
displayed within the application.  
**Default State**:

```
{
  dialogs: []
}
```

**Reducers**:

- addDialog({key, content}) - Adds a dialog to the list of displayed items. Key
  is an identifier used to remove the modal, and content is the React Component
  that will be rendered
- removeDialog(key) - Removes the dialog from the list, if one exists containing
  the provided key

## Pages

### Login

**Purpose**: Used to log into the application.  
**URL**: /  
**Notes**: All urls will display the login page if you haven't logged in

## Components

### DialogBase

**Purpose**: Provides a base dialog that can be used within the application
**Props**:

- title (string) - A title displayed at the top of the modal
- content (object) - HTML or a React Component that is displayed within the
  dialog
- actions (array) - A list of buttons to display at the botom of the modal
- isBlocking (bool) - Should a click outside the dialog dismiss it
- onClose (function) - An action taken when closing the dialog

**Example**:

```
return (
  <DialogBase
    title="My Dialog"
    isBlocking={true}
    content={<div>Hello World!</div>}
    actions={[
      {
        id: "continue",
        text: "Continue",
        handler: () => { console.log("Clicked!") }
      }
    ]}
  />
)
```

### PasswordResetDialog

**Purpose**: Utilizes BaseDialog to display a prompt requiring the currently
logged in user to update their password.
