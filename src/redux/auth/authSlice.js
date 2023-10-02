import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register, refreshUser } from "./operations";

const initialState = {
  user: {
    email: null,
    id: "",
    cards: [],
  },
  isLoggedIn: false,
  userName: "",
  token: null,
  isRefreshing: false
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    getUserName(state, action) {
      state.userName = action.payload;
      localStorage.setItem("userName", JSON.stringify(state.userName));
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.userData;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state) {
      state.user = {
        email: null,
        id: "",
        cards: [],
      };
      state.isLoggedIn = false;
      state.token = null;
      state.userName = "";
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false
    },
    [refreshUser.fulfilled](state) {
      state.isLoggedIn = true;
      state.isRefreshing = false;
    }
  },
});

export const authReducer = authSlice.reducer;
export const { getUserName } = authSlice.actions;
