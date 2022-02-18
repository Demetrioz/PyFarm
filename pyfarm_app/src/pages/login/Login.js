import React from "react";

import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import AccountIcon from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Lock";

import Logo from "../../assets/img/logo.png";

import Style from "./Login.module.css";

function Login() {
  const handleLogin = () => {
    console.log("Logging in!");
  };

  const handleForgot = () => {
    console.log("Forgot password!");
  };

  return (
    <div id="container" className={Style.container}>
      <div id="login_box" className={Style.login_box}>
        <img src={Logo} alt="PyFarm" className={Style.logo} />
        <div id="input" className={Style.input}>
          <TextField
            id="usernname"
            label="Username"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            id="login"
            variant="contained"
            sx={{ marginTop: "12px" }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            id="forgot"
            variant="text"
            sx={{ marginTop: "12px" }}
            onClick={handleForgot}
          >
            Forgot Password?
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
