import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    text-decoration: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Marvel', sans-serif;
    
  }
  body{
    background-color: #333333;
  }

`;

export default GlobalStyle;
