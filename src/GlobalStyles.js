import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-size: 16px;
    margin: 0;
    padding: 0;
    font-family: sofiapro-bold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
}

html {
  height: 100%;
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}

body {
  height: 100%;
  background-color: #fafafa;
}

`;

export const Background = styled.main`
  background-color: #fafafa;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 64rem;
  min-height: calc(100vh - 3.5rem);
  margin: 0 auto;
  display: flex;
`;

export default GlobalStyle;
