import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LocIcon } from "../../images/location.svg";

export const PostBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  background: white;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  width: 100%;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserImage = styled.div`
  height: 3rem;
  width: 3rem;
  background: red;
  border-radius: 50%;
`;

export const UsernameDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin-left: 1rem;

  & > h4 {
    margin-top: 0.375rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: #736f6f;
  }
`;

export const Username = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 2rem;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-right: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-left: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

export const PostTitle = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 1.25rem;
  line-height: 1.5rem;
  :hover {
    color: #06e;
  }
`;

export const ImageDescriptionBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  overflow: hidden;
  :hover {
    cursor: pointer;
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ededed;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-right: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-left: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-bottom-right-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
  & > p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
    line-height: 1.5rem;

    :hover {
      color: #06e;
    }
  }
`;

export const LocationPriceAreaBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1.25rem;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > p {
    margin-left: 0.25rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
  }
`;

export const LocationIcon = styled(LocIcon)`
  fill: rgba(58, 56, 56, 1);
  width: 1.75rem;
  height: 1.75rem;
`;

export const PriceAreaBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > p {
    margin: 0 0.375rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
  }
`;
