import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreakOut from "./components/games/breakout";
import Home from "./components/home";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/breakout" element={<BreakOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
