// dispatch to the reducer here
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { userReducer } from "../reducers/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
