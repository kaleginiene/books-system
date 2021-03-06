import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme";
import "normalize.css";

const GlobalBodyStyle = createGlobalStyle`
  body {
    
    color: #534d4a;
    font-family: 'Castoro', serif;

  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalBodyStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
