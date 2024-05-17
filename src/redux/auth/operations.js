import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const apiRegister = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const response = await axios.post("/users/signup", formData);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const response = await axios.post("/users/login", formData);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setToken(token);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const apiLogout = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await axios.post("/users/logout");
      clearToken();
      return;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
