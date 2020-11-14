import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    completion: {},
    isAuthenticated: false,
  },
  reducers: {
    // ! put the actions here
    testReducer: (state) => {
      state.completion["test"] = 1;
    },
    // todo: load user action
    loadUser: (state, userData) => {
      const { name, email } = userData.payload;
      state.name = name;
      state.email = email;
      state.isAuthenticated = true;
    },
    // todo: Register action
    register: (state, payload) => {
      // if register is a success then we set to the payload
    },
  },
});
