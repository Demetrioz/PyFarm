---
sidebar_position: 3
---

# Web Application

The PyFarm web app is the frontend application used to manage and maintain your
farm.

## Tech Stack

- [Node](https://nodejs.org/en/)
- [React](https://reactjs.org/)

## Dependencies

- [jwt-decode](https://github.com/auth0/jwt-decode)
- [lodash](https://lodash.com/)
- [Material UI](https://mui.com/)
- [Notistack](https://iamhosseindhv.com/notistack)
- [React-Redux](https://react-redux.js.org/)
- [React-Router-Dom](https://reactrouter.com/)

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

### BasePage

**Purpose**: A base page with the default layout that takes a content prop to
render additional content  
**Props**:

- title (string) - A title displayed at the top of the screen
- showBackButton (bool) - Display a back button instead of the menu button
- backUrl (string) - The location that clicking the back button should take you
- content (object) - HTML markup or a component that will be rendered by the
  BasePage

**Example**:

```
function MyPage() {
  return (
    <BasePage
      title="My Page"
      showBackButton={true}
      backUrl="/prior_page"
      content={<div>My Page Content</div>}
    />
  )
}
```

### Login

**Purpose**: Used to log into the application.  
**URL**: /  
**Notes**: All urls will display the login page if you haven't logged in

### NotFound

**Purpose**: Used as a general 404 page when going to a url that doesn't contain
a specified component  
**URL**: \*  
**Notes**: The NotFound page is used as the final Route as a catch-all, so if
any Route above it fails to match the url, this will be displayed

### Reference

**Purpose**: A reference page used to find helpful information about crops, such
as plant times, spacing, etc  
**URL**: /reference

### Users

**Purpose**: A page for managing users within the PyFarm application  
**URL**: /users

## Components

Components are smaller react components that are utilized throughout pages.

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

### Header

**Purpose**: A header object that displays across the top of the screen  
**Props**:

- onMenuClick (function) - An action that occurs when clicking the menu icon
- backUrl (string) - A url that clicking the back button will take you to
- showBackButton (bool) - A back button should be shown instead of a menu button
- title (string) - A title displayed in the header

**Example**:

```
return (
  <div id="page_content">
    <Header
      title="My Header"
      onMenuClick={toggleDrawer}
    />
    <div>
      <p>My page markup</p>
    </div>
  </div>
)
```

### NavigationButton

**Purpose**: A button used in the navigation drawer  
**Props**:

- onClick (function) - an action that occurs when clicking the button
- text (string) - The main text of the button
- icon (icon) - An icon displayed in front of the text

**Example**:

```
return (
  <List>
    <NavigationButton
      icon={<MyIcon />}
      text="My Button"
      onClick={myClickHandler}
    />
  </List>
)
```

### NavigationDrawer

**Purpose**: A drawer used for navigation within the app. Stays visible on large
screens and can be hidden on small screens  
**Props**:

- onClose (function) - An action that occurs when closing the drawer
- open (bool) - Whether the drawer is open or closed

**Example**:

```
return (
  <div id="container">
    <Header ... />
    <NavigationDrawer
      open={openState}
      onClose={closeHandler}
    />
    <div id="page_content">
      <p>My content</p>
    </div>
  </div>
)
```

### PasswordResetDialog

**Purpose**: Utilizes BaseDialog to display a prompt requiring the currently
logged in user to update their password.
