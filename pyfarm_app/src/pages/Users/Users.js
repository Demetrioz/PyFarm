import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import BasePage from "../BasePage/BasePage";

import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import { DataGrid } from "@mui/x-data-grid";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import PyFarmApiService from "../../services/PyFarmApiService";

// header of 64px and top/bottom padding of 8px = 80
const getTableHeight = () => window.innerHeight - 80;

function Users() {
  const [tableHeight, setTableHeight] = useState(getTableHeight());
  const [users, setUsers] = useState([]);

  const handleHeightChange = (matches) => {
    setTableHeight(getTableHeight());
  };

  // See if there's a better way to do this. For the time being, re-run
  // setTableHeight every time the screen grows or shrinks 50 px so we can
  // adjust the height of the data grid
  // eslint-disable-next-line
  const isTallScreen = useMediaQuery(
    {
      minHeight: window.innerHeight - 50,
      maxHeight: window.innerHeight + 50,
    },
    undefined,
    handleHeightChange
  );

  useEffect(() => {
    const loadUsers = async () => {
      try {
        let users = await PyFarmApiService.Users.getUsers();

        console.log("Users:", users);
        let usersWithIds = users.map((user, index) => {
          return { id: index, ...user };
        });

        setUsers(usersWithIds);
      } catch (e) {
        console.log("Error!", e);
      }
    };

    loadUsers();
  }, []);

  const handleAddUser = () => {
    console.log("Adding...");
  };

  const handleEditUser = (userId) => {
    console.log("Editing user ", userId);
  };

  const handleDeleteUser = (userId) => {
    console.log("Deleting user ", userId);
  };

  const renderActionButtons = (params) => {
    let user = params.row;

    return (
      <React.Fragment>
        <IconButton
          aria-label="edit"
          onClick={() => handleEditUser(user.userId)}
          color="secondary"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => handleDeleteUser(user.userId)}
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      </React.Fragment>
    );
  };

  const columns = [
    { field: "username", headerName: "User", flex: 1 },
    { field: "created", headerName: "Created", flex: 1 },
    { field: "lastLogin", headerName: "Last Login", flex: 1 },
    {
      field: "actions",
      headerName: "",
      flex: 1,
      renderCell: renderActionButtons,
    },
  ];

  return (
    <BasePage
      title="Users"
      content={
        <div id="users" style={{ height: `${tableHeight}px` }}>
          <DataGrid rows={users} columns={columns} />
          <Fab
            color="primary"
            aria-label="add"
            onClick={handleAddUser}
            sx={{ position: "absolute", bottom: "56px", right: "16px" }}
          >
            <AddIcon />
          </Fab>
        </div>
      }
    />
  );
}

export default Users;
