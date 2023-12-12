import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Paths from "./constants/Paths";
import { AuthProvider } from "./contexts/AuthContext";

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Menu from "./components/products/Menu";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import CustomPizzaCreate from './components/custom-pizza-create/CustomPizzaCreate';
import CustomPizzaList from "./components/custom-pizza-list/CustomPizzaList";
import CustomPizzaDetails from './components/custom-pizza-details/CustomPizzaDetails';
import CustomPizzaEdit from "./components/custom-pizza-edit/CustomPizzaEdit";
import Logout from "./components/logout/Logout";
import AuthGuard from "./guards/AuthGuard";
import NotFound from "./components/not-found/NotFound";
import MyCustomPizzas from "./components/my-custom-pizzas/MyCustomPizzas";
import ProductDetails from "./components/products-details/ProductDetails";
import ProductCreate from "./components/product-create/ProductCreate";
import ProductEdit from "./components/product-edit/ProductEdit";
import ScrollUp from './components/scroll-up/ScrollUp';
import Loader from "./components/loader/Loader";


function App() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            navigate(Paths.Home);
        }, 3000);

        return () => clearTimeout(timer);
    }, [])
    return (loading ? <Loader /> :
        <AuthProvider>
            <Header />
            <Routes>
                <Route path={Paths.Home} element={<Home />} />
                <Route path={Paths.Menu} element={<Menu />} />
                <Route path={Paths.About} element={<About />} />
                <Route path={Paths.Register} element={<Register />} />
                <Route path={Paths.Login} element={<Login />} />
                <Route path={Paths.CustomPizzaList} element={<CustomPizzaList />} />
                <Route path={Paths.CustomPizzaDetails} element={<CustomPizzaDetails />} />
                <Route path={Paths.ProductDetails} element={<ProductDetails />} />

                <Route element={<AuthGuard />}>
                    <Route path={Paths.Logout} element={<Logout />} />
                    <Route path={Paths.CreatePizza} element={<CustomPizzaCreate />} />
                    <Route path={Paths.CustomPizzaEdit} element={<CustomPizzaEdit />} />
                    <Route path={Paths.MyCustomPizzas} element={<MyCustomPizzas />} />
                    <Route path={Paths.ProductCreate} element={<ProductCreate />} />
                    <Route path={Paths.ProductEdit} element={<ProductEdit />} />
                </Route>
                <Route path={Paths.NotFound} element={<NotFound />} />
            </Routes>
            <Footer />
            <ScrollUp />
        </AuthProvider>
    )
}

export default App
