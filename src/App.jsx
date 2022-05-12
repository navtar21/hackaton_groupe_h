import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
// import QUESTION-1 from "./";
// import QUESTION-2 from "./";
// import QUESTION-3 from "./";
// import QUESTION-4 from "./";
// import Page404 from "./pages/Page404";
import "./css/App.scss";

export default function App() {
    return (
    <ContextProvider>  
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/" element={<QUESTION-1 />} />
                <Route path="/" element={<QUESTION-2 />} />
                <Route path="/" element={<QUESTION-3 />} />
                <Route path="/" element={<QUESTION-4 />} />
                <Route path="*" element={<Page404 />} /> */}
            </Routes>
        </BrowserRouter>
    </ContextProvider>
    );
}
