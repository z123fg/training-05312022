import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables}

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
  ::selection {
    color: var(--clr-base);
    background-color: var(--clr-primary-text);
  }
  :focus-visible {
    outline-offset: 3px;
    outline: 3px dashed var(--clr-primary-text);
  }
  textarea:focus-visible, input:focus-visible {
    outline: none;
  }

  //
  html {
    background-color: var(--clr-base);

  }

  body {
    display: block;
    color: var(--clr-primary-text);
    background-color: var(--clr-primary);
  }
  
  main, section, article, ul, li, h1, h2, h3 {
    display: block;
  }
  
  main {
    margin-top: calc(var(--grid-gutter) / 2);
    min-height: 100vh;
    overflow: hidden;
  }

  //

  h1 {
    color: var(--clr-secondary-text);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);

    font-size: 1.2em;
    line-height: 1.3em;
    @media (min-width: 40rem) {
      font-size: 1.3em;
      line-height: 1.4em;
    }
    @media (min-width: 60rem) {
      font-size: 1.4em;
      line-height: 1.5em;
    }
  }
  h2 {
    color: var(--clr-primary-text);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);

    font-size: 1.2em;
    line-height: 1.3em;
    @media (min-width: 40rem) {
      font-size: 1.3em;
      line-height: 1.4em;
    }
    @media (min-width: 60rem) {
      font-size: 1.4em;
      line-height: 1.5em;
    }
  }
  h3 {
    color: var(--clr-secondary-text);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);

    font-size: 1em;
    line-height: 1.1em;
    @media (min-width: 40rem) {
      font-size: 1.1em;
      line-height: 1.2em;
    }
    @media (min-width: 60rem) {
      font-size: 1.2em;
      line-height: 1.3em;
    }
  }

  //

  span {
    line-height: 1.5rem;
    color: var(--clr-secondary-text);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);

    font-size: 1em;
    line-height: 1.1em;
    @media (min-width: 40rem) {
      font-size: 1.1em;
      line-height: 1.2em;
    }
    @media (min-width: 60rem) {
      font-size: 1.2em;
      line-height: 1.3em;
    }
  }

  p {
    line-height: 1.5rem;
    color: var(--clr-primary-text);

    font-family: var(--font-primary);
    font-size: clamp(0.75em, 6vw, 1em);
    font-weight: var(--font-weight-primary);
  }

  //

  button {
    // button reset
    border: none;
    cursor: pointer;
    background: transparent;
    
    line-height: 1.5rem;
    color: var(--clr-primary-text);
    font-family: var(--font-secondary);
    font-size: clamp(0.75em, 6vw, 1em);
    font-weight: var(--font-weight-secondary);
  }
  a {
    // Link Reset
    cursor: pointer;
    text-decoration: none;
    
    line-height: 1.5rem;
    color: var(--clr-primary-text);
    font-family: var(--font-secondary);
    font-size: clamp(0.75em, 6vw, 1em);
    font-weight: var(--font-weight-secondary);
    &:hover {
      opacity: 0.8;
    }
  }
  input {
    // Input Reset
    border: none;
    background: transparent;

    line-height: 1.5rem;
    color: var(--clr-tertiary);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-secondary);

    font-size: 1em;
    line-height: 1.1em;
    @media (min-width: 40rem) {
      font-size: 1.1em;
      line-height: 1.2em;
    }
    @media (min-width: 60rem) {
      font-size: 1.2em;
      line-height: 1.3em;
    } 
  }

  //

  svg {
    height: calc(var(--grid-gutter) / 3);
    width: calc(var(--grid-gutter) / 3);

    @media (min-width: 40rem) {
      height: calc(var(--grid-gutter) / 2.5);
      width: calc(var(--grid-gutter) / 2.5);
    }
    @media (min-width: 60rem) {
      height: calc(var(--grid-gutter) / 2);
      width: calc(var(--grid-gutter) / 2);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

export default GlobalStyle;
