import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  * ::before,
  * ::after {
    vertical-align: baseline;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #aab8c2;
  }
`;
export default GlobalStyle;
