import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
