import { injectGlobal } from "styled-components";

import "font-awesome/css/font-awesome.css";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    height: 100%;
    width: 100%;
    background-color: #F5F5F5
    text-rendering: optimizeLegibility !important;
    -webkit-font-smothing: antialiased !important;
    font-family: sans-serif;
  }

  .App {
    width: 100%;
    height: 100%;
  }

  html {
    height: 100%;
    width: 100%;
  }

  div {
    padding: 0;
  }
`;
