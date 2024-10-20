import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};
const searchSlice = createSlice({
  name: "filters",
  initialState: INITAL_STATE.filters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = searchSlice.actions;
export const filtersReducer = searchSlice.reducer;
//export const selectNameFilter = (state) => state.filters.name;
