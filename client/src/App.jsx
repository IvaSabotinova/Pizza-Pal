import { Routes, Route } from "react-router-dom"

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Menu from "./components/products/Menu";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import CreateCustomPizza from "./components/create-pizza/CreateCustomPizza";
import CustomPizzaList from "./components/custom-pizza-list/CustomPizzaList";
import Paths from "./constants/Paths";
import PizzaDetails from "./components/pizza-details/PizzaDetails";

//  import 'bootstrap/dist/css/bootstrap.min.css';



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
                <Route path={Paths.CreatePizza} element={<CreateCustomPizza />} />
              <Route path={Paths.CustomPizzaList} element={<CustomPizzaList />} />
              <Route path={`${Paths.CustomPizzaList}/:pizzaId`} element={<PizzaDetails />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
