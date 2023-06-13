import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import GlobalStyle from "./styles/EstiloGlobal";
import { HeroInfo } from "./pages/HeroInfo";
import { DefaultLayout } from "./layouts/DefaultLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/heroinfo" element={<HeroInfo />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
