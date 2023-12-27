import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";
import Home from "./Home";
import Bio from "./Bio";

import Contact from "./Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Portfolio />} path="/Portfolio" />
          <Route element={<Bio />} path="/Bio" />

          <Route element={<Contact />} path="/Contact" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
