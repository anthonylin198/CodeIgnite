// dispatch to the reducer here
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { userReducer } from "../reducers/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ! registerring the user
export const registerAction = (name, email, password) => async (dispatch) => {
  const { loadUser } = userReducer.actions;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    name,
    email,
    password,
  });
  try {
    // try registering user to db
    const res = await axios.post("/api/user", body, config);
    // if successful, set the auth token and find the user
    localStorage.setItem("token", res.data.token);
    if (localStorage.token) {
      setAuthToken(localStorage.token); // sets the x-auth headers
    }
    const userData = await axios.get("/api/auth");
    console.log("here", userData);
    console.log("thisis load", loadUser);
    dispatch(loadUser(userData.data));
  } catch (err) {
    console.log("this is an error");
  }
};

// ! example of async thunk
export const loadUserAction = createAsyncThunk(
  "user/loadUserData",
  async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token); // sets the x-auth headers
    }
    try {
      const userData = await axios.get("/api/auth");
      return userData.data;
    } catch (err) {
      console.log("user is not authenticated");
    }
  }
);

// ! Logout - we would just delete the auth token and run loaduseraction again

// ! Action for login error
