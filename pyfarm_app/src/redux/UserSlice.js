import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { userId: null, firstName: null, lastName: null, token: null },
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
