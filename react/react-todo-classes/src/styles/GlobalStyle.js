import { createGlobalStyle } from "styled-components";
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
  ::selection {
    color: var(--clr-base);
    background-color: var(--clr-primary-text);
  }
  /* Default :focus style */
  :focus {
    outline: 3px dashed var(--clr-primary-text);
    outline-offset: 3px;
  }
  /* If :focus-visible is supported, provide :focus styles for keyboard. */
  :focus-visible {
    outline-offset: 3px;
    outline: 3px dashed var(--clr-secondary);
  }
  
  body {
    display: block;
    color: var(--clr-primary-text);
    background-color: var(--clr-primary);
  }

  h1 {
    letter-spacing: 0.05em;
    line-height: 2.5rem;
    font-size: clamp(1.5em, 6vw, 2em);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary);
  }
  /* EX. section title: All Tasks, Todays Tasks */
  h2 {
    line-height: 2rem;
    letter-spacing: 0.2em;
    color: var(--clr-secondary-text);
    font-size: clamp(0.75em, 6vw, 1em);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);
  }

  /* EX. Category Title */
  h3 {
    line-height: 2rem;
    font-size: clamp(1em, 6vw, 1.1em);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary); 
  }

  a {
    line-height: 1.5rem;
    text-decoration: none;
    color: var(--clr-primary-text);
    font-size: clamp(0.75em, 6vw, 1em);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary);
  }
`;

export default GlobalStyle;
