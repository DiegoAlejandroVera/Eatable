import { css } from "@emotion/react";

export const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;300;400;500&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner:wght@400;500&display=swap");

  * {
    margin: 0;
    padding: 0;
  }

  :root {
    --main-font: "Roboto Slab";
    --secondary-font: "Edu TAS Beginner", cursive;
  }

  body {
    width: 100vw;
    height: 100vh;
    margin: auto;
  }
`;
