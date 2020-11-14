// dispatch to the reducer here
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { userReducer } from "../reducers/user";

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
