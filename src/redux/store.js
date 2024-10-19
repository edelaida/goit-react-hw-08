import { configureStore } from "@reduxjs/toolkit";
//import { contactsReducer } from "./contacts/slice";
import { authSlice } from "./auth/slice";
//import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    //contacts: contactsReducer,
    // filters: filtersReducer,
    auth: authSlice,
  },
});
