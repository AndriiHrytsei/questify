// This code is adapded from the code provided by NaTaLiaMoSKV
// On their GitHub repostory: https://github.com/NaTaLiaMoSKV
// You can find the orginal code hear: https://github.com/NaTaLiaMoSKV/questify/blob/main/src/redux/auth/authOperations.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://questify-backend.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
      const sid = JSON.parse(localStorage.getItem("sid"));
      setAuthHeader(refreshToken);
      try {
        const res = await axios.post("/auth/refresh", { sid });
        setAuthHeader(res.data.newAccessToken);
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(res.data.newRefreshToken)
        );
        localStorage.setItem(
          "accessToken",
          JSON.stringify(res.data.newAccessToken)
        );
        localStorage.setItem("sid", JSON.stringify(res.data.newSid));
        error.config.headers.common.authorization = `Bearer ${res.data.newAccessToken}`;
        return axios(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/register", credentials);
      console.log(res.status);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials);
      setAuthHeader(res.data.accessToken);
      localStorage.setItem("sid", JSON.stringify(res.data.sid));
      localStorage.setItem(
        "refreshToken",
        JSON.stringify(res.data.refreshToken)
      );
      localStorage.setItem("accessToken", JSON.stringify(res.data.accessToken));
      localStorage.setItem("cards", JSON.stringify(res.data.userData.cards));
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("cards");
    localStorage.removeItem("userName");
    clearAuthHeader();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const sid = JSON.parse(localStorage.getItem("sid"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    setAuthHeader(refreshToken);
    if (sid === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      const res = await axios.post("/auth/refresh", { sid });
      setAuthHeader(res.data.newAccessToken);
      localStorage.setItem(
        "refreshToken",
        JSON.stringify(res.data.newRefreshToken)
      );
      localStorage.setItem(
        "accessToken",
        JSON.stringify(res.data.newAccessToken)
      );
      localStorage.setItem("sid", JSON.stringify(res.data.newSid));
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
