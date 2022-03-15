import React from "react";
import {
  AddIcon,
  HomeIcon,
  LinkContainer,
  LinkWrapper,
  LoginButton,
  NavContainer,
  NavWrapper,
  WorldIcon,
} from "./Navbar.elements";

const Navbar = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <LinkWrapper to="/">
          <HomeIcon />
        </LinkWrapper>
        <LinkContainer>
          <LinkWrapper to={"/search"}>
            <WorldIcon />
          </LinkWrapper>
          <LinkWrapper to={"/upload"}>
            <AddIcon />
          </LinkWrapper>
          <LinkWrapper to="/login">
            <LoginButton>Login</LoginButton>
          </LinkWrapper>
        </LinkContainer>
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;
