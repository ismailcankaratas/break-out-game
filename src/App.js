import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreakOut from "./components/games/breakout";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BreakOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
