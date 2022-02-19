import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    dialogs: [],
  },
  reducers: {
    addDialog: (state, action) => {
      state.dialogs.push(action.payload);
    },
    removeDialog: (state, action) => {
      // Remove dialog based on id
    },
  },
});

export const { addDialog, removeDialog } = notificationSlice.actions;
export default notificationSlice.reducer;
