import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import GlobalStyle from "./styles/EstiloGlobal";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
