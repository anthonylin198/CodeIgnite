import React from "react";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">CodeIgnite</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Create an Account to Try Demo</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFir="for">Password</FormLabel>
              <FormInput type="password required"></FormInput>
              <FormButton type="submit">Continue</FormButton>
              <a style={{ color: "red" }} href="fullstackcourse">
                Go To Fullstack
              </a>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
