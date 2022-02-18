import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";

function App() {
  const user = useSelector((state) => state.user);

  console.log("User:", user);

  const content =
    user.Id == null ? (
      <Login />
    ) : (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>App...</div>} />
        </Routes>
      </BrowserRouter>
    );

  return content;
}

export default App;
