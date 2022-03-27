import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as UpArrow } from "../../images/uparr.svg";
import { ReactComponent as DownArrow } from "../../images/downarr.svg";

export const FilterBox = styled.div`
  display: inline-block;
  width: auto;
  height: 2.5rem;
  position: relative;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 0.125rem;
  background: #ffffff;

  & > div {
    :hover {
      span {
        user-select: none;
        color: black;
      }
      svg {
        fill: black;
      }
    }
  }

  & > div > span {
    color: rgb(155, 155, 155);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 0.875rem;
    user-select: none;
    line-height: 1rem;
    padding: 0rem 0.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const UpArrowIcon = styled(UpArrow)`
  margin-right: 0.5rem;
  fill: rgb(155, 155, 155);
  transition: all 0.2s ease-in-out;
`;

export const DownArrowIcon = styled(DownArrow)`
  margin-right: 0.5rem;
  fill: rgb(155, 155, 155);
  transition: all 0.2s ease-in-out;
`;

export const FilterDropdown = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 110%;
  left: 0;
  background: #ffffff;
  width: 18rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.125rem;
  padding: 1rem 1rem 0.75rem;
`;

export const OptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.875rem;
  color: rgb(155, 155, 155);
  user-select: none;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  border: 4px solid lightgray;
  margin-right: 0.75rem;
  cursor: pointer;
`;
