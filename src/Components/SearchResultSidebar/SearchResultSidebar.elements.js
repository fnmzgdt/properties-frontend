import styled from "styled-components";
import { ReactComponent as SearchHouse } from "../../images/housesearch.svg";
import { ReactComponent as FilledLike } from "../../images/filledlike.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const SearchResultWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem 1rem 2.75rem;
  position: sticky;
  top: 0;
  overflow-y: auto;

  color: rgba(0, 0, 0, 0);
  -webkit-text-fill-color: black;
  transition: color 0.4s ease;

  :hover {
    color: rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    :hover {
      color: rgba(0, 0, 0, 0.4);
    }
    width: 1rem;
    border-radius: 13px;
    background-clip: padding-box;
    border: 0.25rem solid transparent;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px;
  }
`;

export const SearchPromptContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchHouseIcon = styled(SearchHouse)`
  width: 60%;
  height: 40%;
`;

export const SearchPromptHeader = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  color: #29b6f6;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`;

export const PostContainer = styled.div`
  height: 14rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 2rem 0;
  transition: 0.2s ease-in-out;
  cursor: pointer;
`;

export const PostDescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const UserCredentialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const UserCredentials = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > div {
    background: lightblue;
    border-radius: 50%;
    width: 2.5rem;
    min-width: 2.5rem;
    height: 2.5rem;
  }
  & > p {
    margin-left: 0.75rem;
    font-size: 0.9375rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
  }
`;

export const FilledLikeIcon = styled(FilledLike)`
  fill: red;
`;

export const PostTextWrapper = styled.div`
  height: 4rem;
  max-height: 4rem;
  margin-bottom: 0.75rem;
  width: 100%;
  overflow: hidden;
`;

export const PostDescriptionText = styled.p`
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.9375rem;
  line-height: 1.25rem;
`;

export const LocationContainer = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;

  & > p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 0.9375rem;
    font-weight: 600;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 15rem;
  background: lightgray;
  margin-left: 2rem;
  border-radius: 0.25rem;
  overflow: hidden;
`;
