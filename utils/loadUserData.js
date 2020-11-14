import setAuthToken from "./setAuthToken";

export const loadUserData = async () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token); // sets the x-auth headers
  }
  try {
    const userData = await axios.get("/api/auth");
    dispatch(loadUser(userData.data));
  } catch (err) {
    console.log("user is not authenticated");
  }
};
