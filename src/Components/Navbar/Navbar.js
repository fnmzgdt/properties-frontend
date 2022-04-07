import {
  AddIcon,
  ExploreIcon,
  HomeIcon,
  LinkContainer,
  LinkWrapper,
  // LoginButton,
  NavContainer,
  NavWrapper,
  ProfileIcon,
  WorldIcon,
} from "./Navbar.elements";
import domus from "../../images/domuslogo.png";

const Navbar = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <LinkWrapper to="/">
          <img src={domus} alt="" style={{ height: "80%" }} />
        </LinkWrapper>
        <LinkContainer>
          <LinkWrapper to="/">
            <HomeIcon />
          </LinkWrapper>
          <LinkWrapper to={"/explore"}>
            <ExploreIcon />
          </LinkWrapper>
          <LinkWrapper to={"/search"}>
            <WorldIcon />
          </LinkWrapper>
          <LinkWrapper to={"/upload"}>
            <AddIcon />
          </LinkWrapper>
          <LinkWrapper to={"/profile"}>
            <ProfileIcon />
          </LinkWrapper>
          {/*<LinkWrapper to="/login">
            <LoginButton>Login</LoginButton>
            </LinkWrapper>*/}
        </LinkContainer>
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;
