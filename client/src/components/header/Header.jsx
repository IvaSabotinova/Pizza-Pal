import { NavLink, useLocation, Link } from "react-router-dom";

import Paths from "../../constants/Paths";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { pathToUrl } from "../../utils/pathUtil";

export default function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const { userId, email, isAuthenticated } = useContext(AuthContext)


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
                                {email !== 'admin@abv.bg' &&
                                    <Link to={Paths.Home} className="navbar-brand">
                                        <span>Pizza Pal</span>
                                    </Link>}
                                {email === 'admin@abv.bg' &&
                                    <Link to={Paths.ProductCreate} className="navbar-brand">
                                        <span>Admin Area</span>
                                    </Link>}
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
                                            <li className="nav-item">
                                                <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to={pathToUrl(Paths.MyCustomPizzas, { _ownerId: userId })}>
                                                    My Pizzas
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
                                                            Welcome to our savory haven of pizzas! Dive into a world of endless possibilities as you create, savor, and share your unique pizza masterpieces.
                                                        </p>
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
                                                            Craft your own delectable creations, explore mouthwatering varieties, and engage with a community that shares your passion.
                                                        </p>                                                      
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
                                                            Your pizza journey starts here – indulge, create, and connect with fellow pizza lovers!
                                                        </p>                                                       
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
                                    {email !== 'admin@abv.bg' &&
                                        <Link to={Paths.Home} className="navbar-brand">
                                            <span>Pizza Pal</span>
                                        </Link>}
                                    {email === 'admin@abv.bg' &&
                                        <Link to={Paths.ProductCreate} className="navbar-brand">
                                            <span>Admin Area</span>
                                        </Link>}

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
                                                <li className="nav-item">
                                                    <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to={pathToUrl(Paths.MyCustomPizzas, { _ownerId: userId })}>
                                                        My Pizzas
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