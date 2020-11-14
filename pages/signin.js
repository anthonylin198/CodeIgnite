import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Button, Box, Text, Input, Checkbox } from "../components/Core";
import {
  BoxStyled,
  BoxInner,
  FormStyled,
  AForgot,
  ASignup,
} from "../components/Auth/signupElements";

import PageWrapper from "../components/PageWrapper";
import setAuthToken from "../utils/setAuthToken";
import Router from "next/router";

// todo: Add Redux
import { useSelector, useDispatch } from "react-redux";
import { userReducer } from "../redux/reducers/user";
import axios from "axios";

const SignIn = () => {
  // hooks
  const { loadUser } = userReducer.actions;
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  // Get the logged in user's data
  useEffect(() => {
    const fetchUserData = async () => {
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
    fetchUserData();
  }, []);

  // Check if the user is authenticated from the redux store - this will check before the update
  if (isAuthenticated) {
    Router.push("/");
  }
  // Setup hook to store all the form data that will be submitted
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      name: formData.name,
      password: formData.password,
    });
    try {
      // try registering user to db
      const res = await axios.post("/api/auth", body, config);
      localStorage.setItem("token", res.data.token);
      if (localStorage.token) {
        setAuthToken(localStorage.token); // sets the x-auth headers
      }
      const userData = await axios.get("/api/auth");
      dispatch(loadUser(userData.data));
    } catch (err) {
      console.log("wrong username or password");
    }
  };
  return (
    <>
      <PageWrapper>
        <BoxStyled bg="#f7f8fa">
          <Box>
            <Container>
              <Row className="justify-content-center">
                <Col lg="7" xl="6">
                  <Box className="text-center" pt="40px">
                    {/* <Logo /> */}
                  </Box>
                </Col>
              </Row>
            </Container>
          </Box>
          <BoxInner className="d-flex align-items-center">
            <Container className="text-center">
              <Box my="100px" mx="auto">
                <Row className="justify-content-center">
                  <Col lg="7" xl="6">
                    <FormStyled>
                      <div className="mb-5">
                        <Title className="mb-2">Sign In</Title>
                        <Text>Enter your account details below</Text>
                      </div>
                      <Box mb={3}>
                        <Input
                          onChange={(e) => onChange(e)}
                          name="email"
                          type="email"
                          placeholder="Email"
                        />
                      </Box>
                      <Box mb={4} className="position-relative">
                        <Input
                          onChange={(e) => onChange(e)}
                          name="password"
                          type="password"
                          placeholder="Password"
                          css={`
                            padding-right: 9.25rem;
                          `}
                        />
                        <Link href="/reset-pass">
                          <AForgot>Forgot Password?</AForgot>
                        </Link>
                      </Box>
                      <Box mb={3} className="text-left">
                        <Checkbox>Keep me signed in</Checkbox>
                      </Box>

                      <Button onClick={() => onSubmit()}>Login</Button>
                      <Box mt={3}>
                        No account?{" "}
                        <Link href="/signup">
                          {/* <a>Signup</a> */}
                          <ASignup>Signup</ASignup>
                        </Link>
                      </Box>
                    </FormStyled>
                  </Col>
                </Row>
              </Box>
            </Container>
          </BoxInner>
        </BoxStyled>
      </PageWrapper>
    </>
  );
};
export default SignIn;
