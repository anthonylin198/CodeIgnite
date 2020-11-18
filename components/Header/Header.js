import React, { useState, useEffect } from "react";
import GuestMenu from "./GuestMenu";
import UserMenu from "./UserMenu";

// redux
import { useSelector, useDispatch } from "react-redux";
import { loadUserAction } from "../../redux/actions/user";

const Header = ({ isDark = false }) => {
  // todo: redux
  const userInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  // todo: Checking if the user is authenticated - different for each page
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // todo: Loading in the user data
  useEffect(() => {
    dispatch(loadUserAction());
  }, []);
  useEffect(() => {
    if (userInfo.user.isAuthenticated) {
      setIsAuthenticated(true);
    }
  }, [userInfo]);

  if (isAuthenticated) {
    return (
      <>
        <UserMenu isDark={isDark} />
      </>
    );
  } else {
    return (
      <>
        <h1>guest</h1>
        <GuestMenu isDark={isDark} />
      </>
    );
  }
};
export default Header;
