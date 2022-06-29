import { css } from "styled-components";

const variables = css`
  :root {
    @font-face {
      font-display: swap;
      font-family: "Open Sans", sans-serif;
      src: url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
      font-weight: 400;
    }
    @font-face {
      font-display: swap;
      font-family: "Ubuntu", sans-serif;
      src: url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap");
      font-weight: 700;
    }

    --clr-base: #010319;
    --clr-primary: #344fa1;
    --clr-secondary: #031956;
    --clr-primary-text: #fcffff;
    --clr-secondary-text: #d7e1e8;
    --clr-accent-pink: #eb05ff;
    --clr-accent-blue: #3078e9;

    --font-primary: "Open Sans", sans-serif;
    --font-secondary: "Ubuntu", sans-serif;
    --font-weight-secondary: 700;
    --font-weight-primary: 400;

    --max-layout-width: 60rem;
    --spacing-unit: 0.5rem;
    --grid-gutter: 5rem;
  }
`;

export default variables;
