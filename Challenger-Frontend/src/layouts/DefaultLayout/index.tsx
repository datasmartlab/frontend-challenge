import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { Header } from "../../components/Header/index";
import lightTheme from "../../styles/Themes/LightTheme";
import DarkTheme from "../../styles/Themes/DarkTheme";
import { ThemeProvider } from "@mui/material";
import GlobalStyle from "../../styles/GlobalStyles";
import { useState, useEffect } from "react";

export function DefaultLayout() {
  const [darkTheme, setdarkTheme] = useState(() => {
    const SavcedDarkTheme = localStorage.getItem("darkTheme");
    return SavcedDarkTheme ? JSON.parse(SavcedDarkTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  const handleThemeChange = () => {
    setdarkTheme(!darkTheme);
  };

  const theme = darkTheme ? DarkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.primary.dark }}>
        <Header handleThemeChange={handleThemeChange} darkTheme={darkTheme} />
        <Container
          maxWidth="lg"
          sx={{ backgroundColor: theme.palette.primary.main, minHeight: "100vh" }}
        >
          <Outlet />
        </Container>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}
