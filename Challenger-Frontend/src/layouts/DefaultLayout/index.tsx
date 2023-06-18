import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { Header } from "../../components/Header/index";
import temaClaro from "../../styles/Themes/TemaClaro";
import temaEscuro from "../../styles/Themes/TemaEscuro";
import { ThemeProvider } from "@mui/material";
import GlobalStyle from "../../styles/EstiloGlobal";
import { useState, useEffect } from "react";

export function DefaultLayout() {
  const [tema, setTema] = useState(() => {
    const temaSalvo = localStorage.getItem("tema");
    return temaSalvo ? JSON.parse(temaSalvo) : true;
  });

  useEffect(() => {
    localStorage.setItem("tema", JSON.stringify(tema));
  }, [tema]);

  const handleTemaChange = () => {
    setTema(!tema);
  };

  const theme = tema ? temaEscuro : temaClaro;
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.primary.dark }}>
        <Header handleTemaChange={handleTemaChange} tema={tema} />
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
