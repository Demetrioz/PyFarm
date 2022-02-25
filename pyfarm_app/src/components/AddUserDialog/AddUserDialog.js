import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import { removeDialog } from "../../redux/NotificationsSlice";

import DialogBase from "../DialogBase/DialogBase";

import TextField from "@mui/material/TextField";

import PyFarmApiService from "../../services/PyFarmApiService";

import Style from "./AddUserDialog.module.css";

function AddUserDialog(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCancel = () => {
    dispatch(removeDialog(props.id));
  };

  const handleSave = async () => {
    try {
      let result = await PyFarmApiService.Users.createUser(username, password);

      if (props.onSave) props.onSave(result[0]);

      enqueueSnackbar("User Created!", { variant: "success" });
      handleCancel();
    } catch (e) {
      enqueueSnackbar(e.message, { variant: "error" });
    }
  };

  const handleUserChange = (event) => setUsername(event.target.value);

  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <DialogBase
      title="Add User"
      id={props.id}
      content={
        <div id="add_user" className={Style.base}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={handleUserChange}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      }
      actions={[
        {
          id: "cancel",
          text: "Cancel",
          color: "secondary",
          handler: handleCancel,
        },
        {
          id: "save",
          text: "Save",
          handler: handleSave,
        },
      ]}
    />
  );
}

export default AddUserDialog;
