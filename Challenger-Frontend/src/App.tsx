import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import GlobalStyle from "./styles/EstiloGlobal";
import { HeroInfo } from "./pages/HeroInfo";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ThemeProvider } from "@mui/material";
import { DefaultTheme } from "./styles/Themes/Default";
function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/heroinfo" element={<HeroInfo />} />
          </Route>
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
