import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "counter",
  initialState: {
    value: {},
    isAuthenticated: false,
  },
  reducers: {
    testReducer: (state) => {
      state.value["test"] = 1;
    },
    // create action that changes isAuthenticated to true
  },
});
