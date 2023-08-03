import React from "react";
import { Meister } from "./components/meister/meister";
import { Route, Routes } from "react-router-dom";
import { Hero } from "./components/hero/hero";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Meister />} />
          <Route path="/hero" element={<Hero />} />
        </Routes>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
