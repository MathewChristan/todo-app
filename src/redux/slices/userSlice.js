import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: JSON.parse(localStorage.getItem("user") ?? "{}"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginHandler: (state, { payload }) => {
      localStorage.setItem("user", JSON.stringify(payload));
      localStorage.setItem("token", payload.accessToken);
      state.userDetails = payload;
    },
  },
});

export const { loginHandler } = userSlice.actions;

export default userSlice.reducer;
