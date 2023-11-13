import Home from "./components/Home";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom"
import About from "./components/About";

function App() {
    return (
        <>    
        < Header /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
