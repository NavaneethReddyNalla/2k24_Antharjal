import { createSlice } from "@reduxjs/toolkit";

export const userLoginSlice = createSlice({
  name: "user-login-slice",
  initialState: {
    isPending: false,
    currentUser: {},
    errorOccurred: false,
    errorMessage: "",
    loginStatus: false,
  },
  reducers: {
    resetState: (state, payload) => {
      state.isPending = false;
      state.currentUser = {};
      state.errorOccurred = false;
      state.errorMessage = "";
      state.loginStatus = false;
    },
  },
});

export default userLoginSlice.reducer;
export const { resetState } = userLoginSlice.actions;
