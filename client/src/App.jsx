import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Menu from "./components/Menu";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom"
import About from "./components/about/About";
import CreatePizza from "./components/create-pizza/CreatePizza";

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
                <Route path="/create-pizza" element={<CreatePizza />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
