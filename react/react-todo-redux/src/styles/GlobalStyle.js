import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables}

  *,
  * ::before,
  * ::after {
    margin: 0;
    padding: 0;
    outline: 0;
    font-size: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    vertical-align: baseline;
  }
  ::selection {
    color: var(--clr-base);
    background-color: var(--clr-primary-text);
  }
  :focus-visible {
    outline-offset: 3px;
    outline: 3px dashed var(--clr-primary-text);
  }

  html {
    background-color: var(--clr-base);
  }
  body {
    display: block;
    color: var(--clr-primary-text);
    background-color: var(--clr-primary);
  }
  section, article, ul, li, h1, h2, h3 {
    display: block;
  }
  main {
    display: block;
    position: relative;
    overflow-x: hidden;
    margin-top: var(--grid-gutter);
  }

  h1 {
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary);

    @media (min-width: 40rem) {
      font-size: 1.3rem;
      letter-spacing: 2px;
    }
    @media (min-width: 60rem) {
    }
  }
  h2 {
    font-size: 1.1rem;
    letter-spacing: 1px;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary);

    @media (min-width: 40rem) {
      font-size: 1.2rem;
      letter-spacing: 1px;
    }
    @media (min-width: 60rem) {
    }
  }
  h3 {
    font-size: 1rem;
    letter-spacing: 1px;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary);

    @media (min-width: 40rem) {
      font-size: 1.15rem;
      letter-spacing: 1px;
    }
    @media (min-width: 60rem) {
    }
  }

  //

  span {
    // custom components for sizing
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);
  }

  p {
    font-size: 1rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);

    @media (min-width: 40rem) {
      font-size: 1.1rem;
    }
    @media (min-width: 60rem) {
    }
  }

  //

  button {
    // button reset
    border: none;
    cursor: pointer;
    background: transparent;
    
    font-size: 1.1rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);

    &:hover {
      opacity: 0.8;
    }
    @media (min-width: 40rem) {
      font-size: 1.1rem;
    }
  }
  a {
    // Link Reset
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;

    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);

    &:hover {
      opacity: 0.8;
    }
    @media (min-width: 40rem) {
      font-size: 1.1rem;
    }
  }

  //

  input {
    // Input Reset
    border: none;
    background: transparent;
    
    font-size: 1rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);

    @media (min-width: 40rem) {
      font-size: 1.1rem;
    }
    @media (min-width: 60rem) {
    } 
  }

  label {
    font-size: 1rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);
    @media (min-width: 40rem) {
      font-size: 1.1rem;
    }
  }

  textarea {
    font-size: 1rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-primary);
    @media (min-width: 40rem) {
      font-size: 1.1rem;
    }
  }

  //

  svg {
    // basic sizing for svg
    height: calc(var(--grid-gutter) / 3);
    width: calc(var(--grid-gutter) / 3);

    &:hover {
      opacity: 0.8;
    }

    @media (min-width: 40rem) {
      height: calc(var(--grid-gutter) / 2.5);
      width: calc(var(--grid-gutter) / 2.5);
    }
    @media (min-width: 60rem) {
      height: calc(var(--grid-gutter) / 2);
      width: calc(var(--grid-gutter) / 2);
    }
  }
`;
export default GlobalStyle;
