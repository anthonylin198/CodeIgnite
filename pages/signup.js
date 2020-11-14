import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Box, Text, Input, Checkbox } from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import Logo from "../components/Logo";
import { device } from "../utils";
// todo: Adding redux
import { useSelector, useDispatch } from "react-redux";
import { registerAction } from "../redux/actions/user";
import { userReducer } from "../redux/reducers/user";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

const BoxStyled = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BoxInner = styled(Box)`
  margin-top: -65px;
  min-height: 100vh;
`;

const FormStyled = styled.form`
  padding: 40px 30px;
  @media ${device.sm} {
    padding: 53px 58px 50px;
  }
  box-shadow: ${({ theme }) => `0 20px 61px ${theme.colors.shadow}`};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.light};
  width: 100%;
`;

const AForgot = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary} !important;
  text-decoration: none !important;
`;

const SignUp = () => {
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
        const res = await axios.post("/api/user", body, config);
        localStorage.setItem("token", res.data.token);
        if (localStorage.token) {
          setAuthToken(localStorage.token);
        }
        const userData = await axios.get("/api/auth");
        console.log(userData.data);
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
