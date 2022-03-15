import React from "react";
import { LinkWrapper } from "../../Components/Navbar/Navbar.elements";
import bg2 from "../../images/interiorbg2.jpg";
import {
  Form,
  FormBox,
  ImageBox,
  ContentBox,
  InputBox,
  LoginSection,
  RememberBox,
} from "./Login.elements";

const Login = () => {
  return (
    <LoginSection>
      <ImageBox>
        <img src={bg2} alt="" />
      </ImageBox>

      <ContentBox>
        <FormBox>
          <h2>Login</h2>
          <Form>
            <InputBox>
              <span>Username</span>
              <input type="text" />
            </InputBox>
            <InputBox>
              <span>Password</span>
              <input type="password" />
            </InputBox>
            <RememberBox>
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </RememberBox>
            <LinkWrapper to="/">
              <InputBox>
                <input type="submit" value="Login" />
              </InputBox>
            </LinkWrapper>
            <InputBox>
              <p>
                Don't have an account? <a href="/signup">Sign Up</a>
              </p>
            </InputBox>
          </Form>
        </FormBox>
      </ContentBox>
    </LoginSection>
  );
};

export default Login;
