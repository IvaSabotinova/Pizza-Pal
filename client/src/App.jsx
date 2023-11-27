import { Routes, Route } from "react-router-dom"

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Menu from "./components/products/Menu";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import CustomPizzaCreate from './components/custom-pizza-create/CustomPizzaCreate';
import CustomPizzaList from "./components/custom-pizza-list/CustomPizzaList";
import Paths from "./constants/Paths";
import CustomPizzaDetails from './components/custom-pizza-details/CustomPizzaDetails';
import CustomPizzaEdit from "./components/custom-pizza-edit/CustomPizzaEdit";



function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={Paths.Home} element={<Home />} />
                <Route path={Paths.Menu} element={<Menu />} />
                <Route path={Paths.About} element={<About />} />
                <Route path={Paths.Register} element={<Register />} />
                <Route path={Paths.Login} element={<Login />} />              
                <Route path={Paths.CreatePizza} element={<CustomPizzaCreate />} />
              <Route path={Paths.CustomPizzaList} element={<CustomPizzaList />} />
              <Route path={Paths.CustomPizzaDetails} element={<CustomPizzaDetails />} />
              <Route path={Paths.CustomPizzaEdit} element={<CustomPizzaEdit/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App
