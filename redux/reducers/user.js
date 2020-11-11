import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "counter",
  initialState: {
    name: "",
    email: "",
    completion: {},
    isAuthenticated: false,
  },
  reducers: {
    testReducer: (state) => {
      state.completion["test"] = 1;
    },
    // create action that changes isAuthenticated to true
  },
});
