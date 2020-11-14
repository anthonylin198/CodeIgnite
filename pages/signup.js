import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Button, Box, Input } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import setAuthToken from "../utils/setAuthToken";
import {
  BoxStyled,
  BoxInner,
  FormStyled,
  AForgot,
} from "../components/Auth/signupElements";

import Router from "next/router";

// todo: Adding redux
import { useSelector, useDispatch } from "react-redux";
import { userReducer } from "../redux/reducers/user";
import axios from "axios";

const SignUp = () => {
  // Check the user's state
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
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  if (isAuthenticated) {
    // redirect to home
    Router.push("/");
  }
  // todo adding functionality
  const { register, loadUser } = userReducer.actions;
  const dispatch = useDispatch();

  // Setup hook to store all the form data that will be submitted
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match");
    } else {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
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
        dispatch(loadUser(userData.data));
      } catch (err) {
        console.log("this is an error");
      }
    }
  };
  return (
    <>
      <PageWrapper>
        <BoxStyled bg="#f7f8fa">
          <Box>
            <Container className="text-center">
              <Row className="justify-content-center">
                <Col lg="7" xl="6">
                  <Box pt="40px" className="text-center">
                    {/* <Logo /> */}
                  </Box>
                </Col>
              </Row>
            </Container>
          </Box>
          <BoxInner>
            <Container className="text-center">
              <Box my="150px" mx="auto">
                <Row className="justify-content-center">
                  <Col lg="7" xl="6">
                    <FormStyled>
                      <div className="mb-5">
                        <Title className="mb-2">Sign Up</Title>
                        {/* <Text>No credit card required</Text> */}
                      </div>
                      <Box mb={3}>
                        <Input
                          name="name"
                          type="text"
                          placeholder="Full Name"
                          onChange={(e) => {
                            onChange(e);
                          }}
                        />
                      </Box>
                      <Box mb={3}>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email address"
                          onChange={(e) => {
                            onChange(e);
                          }}
                        />
                      </Box>

                      <Box mb={3} className="position-relative">
                        <Input
                          name="password"
                          type="password"
                          placeholder="Password"
                          onChange={(e) => {
                            onChange(e);
                          }}
                        />
                      </Box>
                      <Box mb={4} className="position-relative">
                        <Input
                          name="confirmPassword"
                          type="password"
                          placeholder="Confirm password"
                          onChange={(e) => {
                            onChange(e);
                          }}
                        />
                      </Box>

                      <Button onClick={() => onSubmit()}>Get Started</Button>
                      <Box mt={3}>
                        Already have an account?{" "}
                        <Link href="/signin">
                          <AForgot>Sign in</AForgot>
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
export default SignUp;
