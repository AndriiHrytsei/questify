import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations";


const initialState = {
  user: {
    name: null,
    email: null,
  },
  isLoggedIn: false,
  token: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token
    },
    [login.fulfilled](state, action){
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token
    },
    [logout.fulfilled](state) {
      state.user = {name: '', email: ''};
      state.isLoggedIn = false;
      state.token = null
    }
  }
})

export const authReducer = authSlice.reducer