import { createGlobalStyle, creatGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables}

  *,
  * ::before,
  * ::after {
    vertical-align: baseline;
    box-sizing: border-box;
    font-size: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    display: block;
    background-color: var(--clr-primary);
    color: var(--clr-secondary);
  }

  h1 {
    line-height: 2.5rem;
    font-size: clamp(1.5em, 6vw, 2em);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary);
  }
`;

export default GlobalStyle
