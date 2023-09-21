import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.userData;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state) {
      state.user = { name: "", email: "" };
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const authReducer = authSlice.reducer;