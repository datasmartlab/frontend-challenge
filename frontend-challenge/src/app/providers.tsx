'use client'
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import store from "./Controller/Redux/store";
import { Provider } from "react-redux";
const Providers = ({children}:any) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};
export default Providers;
