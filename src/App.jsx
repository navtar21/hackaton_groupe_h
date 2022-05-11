import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

import "./css/App.scss";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
