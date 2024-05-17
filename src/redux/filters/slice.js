import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  contacts: {
    items: [],
  },
  filter: {
    name: "",
  },
};
const searchSlice = createSlice({
  name: "filter",
  initialState: INITAL_STATE.filter,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = searchSlice.actions;
export const filterReducer = searchSlice.reducer;
export const selectNameFilter = (state) => state.filter.name;
