import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { instance } from "../auth/operations";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const fetchContacts = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/contacts");
      console.log("data GetContacts: ", data);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addNew",
  async (contacts, thunkAPI) => {
    try {
      const response = await instance.post("/contacts", contacts);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/remove",
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
