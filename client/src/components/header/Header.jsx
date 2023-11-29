import { NavLink, useLocation } from "react-router-dom";

import Paths from "../../constants/Paths";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const { isAuthenticated } = useContext(AuthContext)


    return (
        <>
            {isHomePage && (
                <div className="hero_area">
                    <div className="bg-box">
                        <img src="images/406_bg_banner.jpg" alt="" />
                    </div>
                    <header className="header_section">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg custom_nav-container ">
                                <a className="navbar-brand" href="">
                                    <span>Pizza Pal</span>
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className=""> </span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item active">
                                            <NavLink className="nav-link" to={Paths.Home}>
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={({ isActive }) => isActive ? { color: "#ffbe33" } : { color: '#ffffff' }} className="nav-link" to={Paths.Menu}>
                                                Menu
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to={Paths.About}>
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to={Paths.CustomPizzaList}>
                                                All Custom Pizzas
                                            </NavLink>
                                        </li>
                                        {isAuthenticated && (<>
                                            <li className="nav-item">
                                                <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to={Paths.CreatePizza}>
                                                    Create Pizza
                                                </NavLink>
                                                </li>                                           
                                            <li className="user_option">
                                                <NavLink to="/logout" className="login_online">
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </>
                                        )}
                                     </ul>
                                    {!isAuthenticated && <div className="user_option">
                                        <NavLink to="/register" className="login_online">
                                            Register
                                        </NavLink>
                                        <NavLink to="/login" className="login_online">
                                            Log In
                                        </NavLink>
                                    </div>}

                                </div>
                            </nav>
                        </div>
                    </header>
                    {isHomePage && (
                        <section className="slider_section ">
                            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="container ">
                                            <div className="row">
                                                <div className="col-md-7 col-lg-6 ">
                                                    <div className="detail-box">
                                                        <h1>Pizza Pal Restaurant</h1>
                                                        <p>
                                                            Welcome to our Pizza Pal Restaurant, where your pizza cravings meet convenience.
                                                        </p>
                                                        <div className="btn-box">
                                                            <a href="" className="btn1">
                                                                Search
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <div className="container ">
                                            <div className="row">
                                                <div className="col-md-7 col-lg-6 ">
                                                    <div className="detail-box">
                                                        <h1>Pizza Pal Restaurant</h1>
                                                        <p>
                                                            At Pizza Pal Restaurant we're serving up piping-hot pizzas with a side of seamless online ordering.
                                                        </p>
                                                        <div className="btn-box">
                                                            <a href="" className="btn1">
                                                                Search
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="container ">
                                            <div className="row">
                                                <div className="col-md-7 col-lg-6 ">
                                                    <div className="detail-box">
                                                        <h1>Pizza Pal Restaurant</h1>
                                                        <p>
                                                            The pizza you love, delivered to your doorstep. It's all possible with Pizza Pal Restaurant.
                                                        </p>
                                                        <div className="btn-box">
                                                            <a href="" className="btn1">
                                                                Search
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#customCarousel1"
                                            data-slide-to={0}
                                            className="active"
                                        />
                                        <li data-target="#customCarousel1" data-slide-to={1} />
                                        <li data-target="#customCarousel1" data-slide-to={2} />
                                    </ol>
                                </div>
                            </div>
                        </section>)}
                </div>
            )}
            {!isHomePage && (
                <div className="sub_page">
                    <div className="hero_area">
                        <div className="bg-box">
                        </div>
                        <header className="header_section">
                            <div className="container">
                                <nav className="navbar navbar-expand-lg custom_nav-container ">
                                    <a className="navbar-brand" href="">
                                        <span>
                                            Pizza Pal
                                        </span>
                                    </a>

                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className=""> </span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav  mx-auto ">
                                            <li className="nav-item">
                                                <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to={Paths.Home}>Home </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to={Paths.Menu}>Menu </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to={Paths.About}>About</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to={Paths.CustomPizzaList}>
                                                    All Custom Pizzas
                                                </NavLink>
                                            </li>
                                            {isAuthenticated && (<>
                                                <li className="nav-item">
                                                    <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to={Paths.CreatePizza}>
                                                        Create Pizza
                                                    </NavLink>
                                                </li>
                                                <li className="user_option">
                                                    <NavLink to="/logout" className="login_online">
                                                        Logout
                                                    </NavLink>
                                                </li>
                                            </>
                                            )}
                                        </ul>
                                        {!isAuthenticated && <div className="user_option">
                                            <NavLink to="/register" className="login_online">
                                                Register
                                            </NavLink>
                                            <NavLink to="/login" className="login_online">
                                                Log In
                                            </NavLink>
                                        </div>}
                                    </div>
                                </nav>
                            </div>
                        </header>
                    </div>
                </div>)}
        </>

    );
}