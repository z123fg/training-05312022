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
  }

  h1 {
    color: var(--clr-secondary-text);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);

    @media (min-width: 40rem) {
    }
    @media (min-width: 60rem) {
    }
  }
  h2 {
    color: var(--clr-primary-text);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);

    @media (min-width: 40rem) {
    }
    @media (min-width: 60rem) {
    }
  }
  h3 {
    color: var(--clr-secondary-text);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);

    @media (min-width: 40rem) {
    }
    @media (min-width: 60rem) {
    }
  }

  //

  span {
    color: var(--clr-secondary-text);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);

    @media (min-width: 40rem) {
    }
    @media (min-width: 60rem) {
    }
  }

  p {
    color: var(--clr-primary-text);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);

    @media (min-width: 40rem) {
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
    
    color: var(--clr-primary-text);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary);

    &:hover {
      opacity: 0.8;
    }
  }
  a {
    // Link Reset
    cursor: pointer;
    text-decoration: none;

    color: var(--clr-primary-text);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary);

    &:hover {
      opacity: 0.8;
    }
  }
  input {
    // Input Reset
    border: none;
    background: transparent;

    color: var(--clr-tertiary);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary);

    @media (min-width: 40rem) {
    }
    @media (min-width: 60rem) {
    } 
  }
  input[type=checkbox]:checked {
    border: none;
    outline: none;
    accent-color: var(--clr-primary-accent);
    background: transparent;
    height: 1.25rem;
    width: 1.25rem;
  }
  input[type=checkbox] {
    border: none;
    outline: none;
    accent-color: var(--clr-primary-accent);
    background: transparent;
    height: 1.1rem;
    width: 1.1rem;
  }
  label {
    
  }

  //

  svg {
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

  /* section backgrounds */
  /* #dashboardRoute {
    background-color: var(--clr-primary);
  } */
`;
export default GlobalStyle;