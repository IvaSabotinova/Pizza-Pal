import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Menu from "./components/Menu";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom"
import About from "./components/about/About";
import CustomPizzaPage from "./components/custom-pizza/CustomPizzaPage";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="about" element={<About />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="custom-pizza-page" element={<CustomPizzaPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
