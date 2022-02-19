import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./UserSlice";
import notificationReducer from "./NotificationsSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    notifications: notificationReducer,
  },
});
