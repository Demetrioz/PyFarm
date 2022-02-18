import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import Slide from "@mui/material/Slide";

import App from "./App";
import store from "./redux/Store";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#43a047",
      light: "#76d275",
      dark: "#00701a",
    },
    secondary: {
      main: "#cddc39",
      light: "#ffff6e",
      dark: "#99aa00",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={2000}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
