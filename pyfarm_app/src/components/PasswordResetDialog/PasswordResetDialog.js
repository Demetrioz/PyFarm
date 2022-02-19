import React, { useState } from "react";

import TextField from "@mui/material/TextField";

import DialogBase from "../DialogBase/DialogBase";

import Style from "./PasswordResetDialog.module.css";

function PasswordResetDialog() {
  const [password, setPassword] = useState({
    value: "",
    error: false,
    helperText: "",
  });

  const [verifiedPassword, setVerifiedPassword] = useState({
    value: "",
    error: false,
    helperText: "",
  });

  const handlePasswordChange = (event) => {
    let value = event.target.value;
    setPassword({
      value: value,
      error: false,
      helperText: "",
    });

    handleVerificationChange(
      { target: { value: verifiedPassword.value } },
      value
    );
  };

  const handleVerificationChange = (event, newValue) => {
    let comparison = newValue ?? password.value;

    let value = event.target.value;
    let error = !(value === comparison);
    let helperText = error ? "Passwords don't match" : "";

    setVerifiedPassword({
      value: value,
      error: error,
      helperText: helperText,
    });
  };

  const handleSave = () => {
    console.log("Saving...");
  };

  return (
    <DialogBase
      title="Password Reset"
      isBlocking={true}
      content={
        <div id="password_reset">
          <p>
            Your account has been flagged for a password reset. Please enter a
            new password in the field below
          </p>
          <div id="input" className={Style.input}>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={password.value}
              onChange={handlePasswordChange}
            />
            <TextField
              id="verification"
              label="Verify Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={verifiedPassword.value}
              error={verifiedPassword.error}
              helperText={verifiedPassword.helperText}
              onChange={handleVerificationChange}
            />
          </div>
        </div>
      }
      actions={[
        {
          id: "save",
          text: "Save",
          handler: handleSave,
        },
      ]}
    />
  );
}

export default PasswordResetDialog;
