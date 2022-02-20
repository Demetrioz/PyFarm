import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { addDialog } from "./redux/NotificationsSlice";

import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Reference from "./pages/Reference/Reference";
import Users from "./pages/Users/Users";

import PasswordResetDialog from "./components/PasswordResetDialog/PasswordResetDialog";

import PyFarmApiService from "./services/PyFarmApiService";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const dialogs = useSelector((state) => state.notifications.dialogs);

  useEffect(() => {
    if (PyFarmApiService.apiUrl === null) PyFarmApiService.initialize();

    if (user && user.resetRequired)
      dispatch(
        addDialog({
          key: "password_reset",
          content: <PasswordResetDialog id="password_reset" />,
        })
      );
  }, [user, dispatch]);

  console.log("User:", user);

  const content =
    user.sub == null ? (
      <Login />
    ) : (
      <BrowserRouter>
        {dialogs.length > 0 &&
          dialogs.map((dialog) => {
            return (
              <React.Fragment key={dialog.key}>{dialog.content}</React.Fragment>
            );
          })}
        <Routes>
          <Route path="/" element={<Reference />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );

  return content;
}

export default App;
