import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import {ReactComponent as Info} from "../../images/reply.svg"

export const ExploreContainer = styled(Container)`
  padding-top: 0;
  ${Container}
`;

export const ExploreWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`;

export const SmallRowWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;
`;

export const ImageWrapper = styled.div`
  width: 30%;
  padding-bottom: 30%;
  position: relative;
  background: lightgray;
  cursor: pointer;
  &:hover .infoplaceholder {
    background: #0288d1;
  }
`;

export const InformationPlaceholder = styled.div`
  height: 15%;
  width: 15%;
  background: #29b6f6;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 100%;
  transition: 0.1s ease-in-out;
`;

export const InfoIcon = styled(Info)`
  margin: 0 0 0.5rem 0.5rem;
  transform: rotate(300deg);
  fill: white;
  width: 1.75rem;
  height: 1.75rem;
`

export const SearchContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
`;

export const LocationInput = styled.input`
  width: 100%;
  height: 2.5rem;
  background: inherit;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.23);
  padding-bottom: 1px;
  &:hover {
    border-bottom: 1px solid black;
  }
  :focus {
    border-bottom: 2px solid black;
    padding-bottom: 0;
  }
`;
