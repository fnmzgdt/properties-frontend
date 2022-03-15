import styled from "styled-components";
import { Container } from "../../GlobalStyles";

export const UploadPageContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding-top: 0;
  ${Container}
`;

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadListingContainer = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  flex-direction: column;
`;

export const NavigationLink = styled.button`
  border: none;
  background: none;
  color: #0288d1;
  font-weight: 600;
  font-size: 1rem;
  cursor: ${({ visible }) => (visible ? "pointer" : "default")};
  text-decoration: underline;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
`;

/*
export const UploadProgress = styled.div`
  height: 1.5rem;
  width: 100%;
  background: #dfdfdf;
  margin-bottom: 1rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: ${(props) => (props.width / 4) * 100}%;
  background: linear-gradient(to right, #c8ebfe, #0288d1);
  border-radius: inherit;
  transition: all 0.3s ease;
`;

*/

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  //border: 4px solid #a0e4f1;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #c8ebfe;
  overflow: hidden;
`;

export const FormBox = styled.div`
  width: 100%;
  height: 100%;
`;

//BUTTONS

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: inline-block;
  position: absolute;
  top: 0%;
  left: 0;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 50px;
  text-transform: uppercase;
  white-space: normal;
  font-weight: 700;
  text-align: center;
  padding: 16px 14px 18px;
  color: #fff;
  background-color: #0288d1;
  height: 48px;
  :hover {
    background-color: #29b6f6;
  }
`;

///

export const MapWrapper = styled.div`
  width: 100%;
  height: 50vh;
  border-radius: 20px;
  margin-bottom: 2.5rem;
`;
