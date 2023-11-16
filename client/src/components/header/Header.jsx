import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <>
            {isHomePage && (
                <div className="hero_area">
                    <div className="bg-box">
                        <img src="images/406_bg_banner.jpg" alt="" />
                    </div>
                    {/* header section strats */}
                    <header className="header_section">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg custom_nav-container ">
                                <a className="navbar-brand" href="index.html">
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
                                    <ul className="navbar-nav  mx-auto ">
                                        <li className="nav-item active">
                                            {/* <a className="nav-link" href="index.html">
                                        Home <span className="sr-only">(current)</span>
                                    </a>  */}
                                            <NavLink className="nav-link" to="/">
                                                Home

                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="menu.html">
                                        Menu
                                    </a> */}
                                            <NavLink style={({ isActive }) => isActive ? { color: "#ffbe33" } : { color: '#ffffff' }} className="nav-link" to="/menu">
                                                Menu
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="about.html">
                                        About
                                    </a> */}
                                            <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to="/about">
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to="/book">
                                                Book Table
                                            </NavLink>
                                        </li>
                                    </ul>
                                    <div className="user_option">
                                        <a href="" className="user_link">
                                            <i className="fa fa-user" aria-hidden="true" />
                                        </a>
                                        <a className="cart_link" href="#">
                                            {/* <svg
                                                version="1.1"
                                                id="Capa_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 456.029 456.029"
                                                style={{ enableBackground: "new 0 0 456.029 456.029" }}
                                                xmlSpace="preserve"
                                            >
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                                                        c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                                        />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                                                        C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                                                        c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                                                        C457.728,97.71,450.56,86.958,439.296,84.91z"
                                                        />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                                                        c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                                        />
                                                    </g>
                                                </g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                                <g></g>
                                            </svg> */}
                                        </a>
                                        <form className="form-inline">
                                            <button
                                                className="btn  my-2 my-sm-0 nav_search-btn"
                                                type="submit"
                                            >
                                                <i className="fa fa-search" aria-hidden="true" />
                                            </button>
                                        </form>
                                        <a href="" className="order_online">
                                            Register
                                        </a>
                                        <a href="" className="order_online">
                                            Log In
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                    {/* end header section */}
                    {/* slider section */}
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
                    {/* end slider section */}

                </div>
            )}
            {!isHomePage && (
                <div className="sub_page">
                    <div className="hero_area">
                        <div className="bg-box">
                            {/* <img src="images/hero-bg.jpg" alt=""/> */}
                        </div>
                        <header className="header_section">
                            <div className="container">
                                <nav className="navbar navbar-expand-lg custom_nav-container ">
                                    <a className="navbar-brand" href="index.html">
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
                                                <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to="/">Home </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to="/menu">Menu </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to="/about">About</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink style={({ isActive }) => isActive ? { color: '#ffbe33' } : { color: '#ffffff' }} className="nav-link" to="/book">Book Table</NavLink>
                                            </li>
                                        </ul>
                                        <div className="user_option">
                                            <a href="" className="user_link">
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                            </a>
                                            <a className="cart_link" href="#">
                                                {/* <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style="enable-background:new 0 0 456.029 456.029;" xml: space="preserve">
                                                    <g>
                                                        <g>
                                                            <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                   c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                                                        </g>
                                                    </g>
                                                    <g>
                                                        <g>
                                                            <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                   C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                   c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                   C457.728,97.71,450.56,86.958,439.296,84.91z" />
                                                        </g>
                                                    </g>
                                                    <g>
                                                        <g>
                                                            <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                   c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                                                        </g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                </svg> */}
                                            </a>
                                            <form className="form-inline">
                                                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                            </form>
                                            <a href="" className="order_online">
                                                Order Online
                                            </a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </header>
                    </div>
                </div>)}
        </>

    );
}