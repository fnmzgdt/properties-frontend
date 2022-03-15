import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import { ReactComponent as Usd } from "../../images/usd.svg";
import { ReactComponent as Euro } from "../../images/euro.svg";

export const PostPageContainer = styled(Container)`
  flex-direction: column;
  padding-top: 2rem;
  ${Container}
`;

export const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Postheader = styled.h1`
  width: 42rem;
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 400;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const ImageAuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
`;

export const ImageWrapper = styled.div`
  width: 42rem;
  min-width: 42rem;
  height: 37rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.125rem;
  background: #ffffff;
`;

export const AuthorPriceWrapper = styled.div`
  width: 17rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.125rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 2rem;
`;

export const ConverterContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const Price = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  color: #29b6f6;
  margin-bottom: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const CurrencyButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const CurrencyButton = styled.button`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background: ${({ selected }) => (selected ? "#e4e4e4" : "white")};
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  font-size: 0.875rem;
  font-weight: 550;
  user-select: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  :hover {
    background: #e4e4e4;
  }
`;
export const UsdCurrency = styled(Usd)`
  width: 1rem;
  height: 1rem;
`;

export const EuroCurrency = styled(Euro)`
  width: 1rem;
  height: 1rem;
`;

export const Area = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #29b6f6;
  margin-top: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Agency = styled.h4`
  align-self: center;
  font-size: 1rem;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
  text-decoration: underline;
  :hover {
    text-decoration: none;
    color: #29b6f6;
  }
`;

export const AuthorContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const AuthorProfileImage = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #29b6f6;
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.75rem;

  & > h4 {
    font-size: 0.875rem;
    padding: 0.2rem 0;
    font-weight: 600;
  }

  & > p {
    font-size: 0.875rem;
    padding: 0.2rem 0;
    font-weight: 400;
  }
`;

export const PublishedBy = styled.h3`
  display: flex;
  flex-direction: row;
  font-size: 0.875rem;
  color: #aaa9a8;
  font-weight: 400;
  margin-bottom: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &:before {
    margin: auto;
    margin-right: 0.25rem;
    content: "";
    flex: 1 1;
    border-bottom: 1px solid #aaa9a8;
  }
  &:after {
    margin: auto;
    margin-left: 0.25rem;
    content: "";
    flex: 1 1;
    border-bottom: 1px solid #aaa9a8;
  }
`;

export const ShowPhoneButton = styled.button`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  border-radius: 0.25rem;
  transition-duration: 0.3s;
  border: none;
  font-weight: 600;
  color: #fff;
  background-color: #29b6f6;
  height: 2.25rem;
  :hover {
    background-color: lightblue;
  }
`;

export const PhoneNumber = styled.p`
  align-self: center;
  margin-top: 2rem;
  font-size: 1.5rem;
  color: #29b6f6;
`;
//////////////////

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 8rem;
  margin: 1rem 0;
  background: lightpink;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  background: lightcoral;
  margin: 1rem 0;
`;
