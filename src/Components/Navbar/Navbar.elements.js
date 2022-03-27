import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Home } from "../../images/home.svg";
import { ReactComponent as Add } from "../../images/addbox.svg";
import { ReactComponent as World } from "../../images/map1.svg";

export const HomeIcon = styled(Home)`
  fill: #0288d1;
  height: 60%;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    fill: #29b6f6;
  }
`;

export const AddIcon = styled(Add)`
  margin: 0 0.5rem;
  fill: #0288d1;
  width: 1.75rem;
  height: 1.75rem;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    fill: #29b6f6;
  }
`;

export const WorldIcon = styled(World)`
  margin: 0 0.5rem;
  fill: #0288d1;
  width: 1.75rem;
  height: 1.75rem;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    fill: #29b6f6;
  }
`;

export const LinkContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const LinkWrapper = styled(Link)`
  height: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const NavWrapper = styled.div`
  position: sticky;
  top: 0px;
  height: 3.5rem;
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  background: white;
  z-index: 999;
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 66.5rem;
  padding: 0 1.25rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.6rem;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 7rem;
  text-transform: uppercase;
  white-space: normal;
  font-weight: 700;
  color: #fff;
  background-color: #0288d1;
  height: 2.25rem;
  :hover {
    background-color: #29b6f6;
  }
`;
