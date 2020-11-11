import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "counter",
  initialState: {
    value: [],
  },
  reducers: {
    testReducer: (state) => {
      state.value.push("hello");
    },
  },
});
