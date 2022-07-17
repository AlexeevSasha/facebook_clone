import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    overflow-y: scroll;
  }
  body {
    font-family: "Segoe UI", Helvetica, Arial, sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
