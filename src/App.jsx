import { BrowserRouter, Routes, Route } from "react-router-dom";

import Start from "./pages/Start";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";

import "./css/App.scss";

export default function App() {
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
