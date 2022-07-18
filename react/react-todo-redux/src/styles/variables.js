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

    --clr-base: #000000;
    --clr-primary: #000000;
    --clr-secondary: #1a1b1d;
    --clr-tertiary: rgba(142, 147, 159, 0.8);

    --clr-primary-text: #FDFFFF;
    --clr-secondary-text: #BBC2D8;
    --clr-primary-accent: #00C098; // green
    --clr-secondary-accent: #4FA2FF; // blue
    --clr-tertiary-accent: #DF5563; // red-pink

    --font-primary: "Open Sans", sans-serif;
    --font-secondary: "Ubuntu", sans-serif;
    --font-weight-secondary: 700;
    --font-weight-primary: 400;

    --header-height-mobile: 5rem;
    --header-height-desktop: 5rem;
    --max-layout-width: 80rem;
    --spacing-unit: 0.5rem;
    --grid-gutter: 4rem;
    --card-radius: 1rem;
    --border: solid 2px;
  }
`
export default variables;