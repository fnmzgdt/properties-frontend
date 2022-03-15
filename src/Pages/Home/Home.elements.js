import styled from "styled-components";
import { Container, Background } from "../../GlobalStyles";

export const PageBackground = styled(Background)`
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
`;

export const PageContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  ${Container}
`;
