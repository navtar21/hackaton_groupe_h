import { BrowserRouter, Routes, Route } from "react-router-dom";

import Start from "./pages/Start";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Petite_maison from "./pages/Petite_maison";

import "./css/App.scss";

export default function App() {
n
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/petite_maison" element={<Petite_maison />} />
      </Routes>
    </BrowserRouter>
  );

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );

}
