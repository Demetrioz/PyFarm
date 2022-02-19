import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    sub: null,
    email: null,
    name: null,
    phone_number: null,
    resetRequired: null,
    exp: null,
  },
  reducers: {
    setUser: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
