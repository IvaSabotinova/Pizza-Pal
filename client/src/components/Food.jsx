import Product from "./Product";
import { useState, useEffect } from "react";
import * as productService from '../services/productService';


export default function Food() {
    const [products, setProducts] = useState([]);
    const [activeFilter, setActiveFilter] = useState('*');
    const [visibleProducts, setVisibleProducts] = useState(6);

    useEffect(() => {
        productService.getAll()
            .then((res) => setProducts(res))
            .catch((err) => console.log(err))
    }, []);

    const filterProducts = (type) => {
        setActiveFilter(type);
        setVisibleProducts(6);
    }

    const filteredProducts = activeFilter === '*' ? products : products.filter(x => x.type === activeFilter);

    const loadMore = (e) => {
        e.preventDefault() //Prevent the default behavior of scrolling to the top
        setVisibleProducts(state => state + 6);
    };

    return (<section className="food_section layout_padding-bottom">
        <div className="container">
            <div className="heading_container heading_center">
                <h2>Our Menu</h2>
            </div>
            <ul className="filters_menu">
                <li className={activeFilter === '*' ? 'active' : ''} onClick={() => filterProducts('*')} data-filter="*"> All </li>
                <li className={activeFilter === 'pizza' ? 'active' : ''} onClick={() => filterProducts('pizza')} data-filter=".pizza">Pizzas</li>
                <li className={activeFilter === 'starter' ? 'active' : ''} onClick={() => filterProducts('starter')} data-filter=".starter">Starters</li>
                <li className={activeFilter === 'dessert' ? 'active' : ''} onClick={() => filterProducts('dessert')} data-filter=".dessert">Desserts</li>
                <li className={activeFilter === 'drink' ? 'active' : ''} onClick={() => filterProducts('drink')} data-filter=".drink">Drinks</li>
            </ul>
            <div className="filters-content">
                <div className="row grid">
                    {filteredProducts.slice(0, visibleProducts).map(prod => (<Product
                        key={prod.id}
                        {...prod}

                    />))}

                    {/*<div className="col-sm-6 col-lg-4 all pizza">
                        <div className="box">
                            <div>
                                <div className="img-box">
                                    <img src="images/pizzas/margarita.png" alt="margarita" />
                                </div>
                                <div className="detail-box">
                                    <h5>Pizza Margarita</h5>
                                     <p>
                                        Thin Italian Style dough stuffed with Philadelphia cream cheese, mozzarella, tomato sauce
                                    </p> 
                                    <div className="options">
                                        <h6>BGN14.90</h6>
                                        <button style={{
                                            backgroundColor: '#ffbe33',
                                            color: '#ffffff',
                                            marginRight: '10px',
                                            marginLeft: '120px',
                                            borderRadius: '20px'
                                        }}>Details</button>
                                        <a href="">
                                            <svg
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
                                            </svg>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="col-sm-6 col-lg-4 all burger">
                        <div className="box">
                            <div>
                                <div className="img-box">
                                    <img src="images/pizzas/pepperoni.png" alt="pepperoni" />
                                </div>
                                <div className="detail-box">
                                    <h5>Pepperoni Classic</h5>
                                     <p>
                                        Hand-tossed dough with mozzarella stuffed crust, mozzarella, tomato sauce, extra pepperoni
                                    </p> 
                                    <div className="options">
                                        <h6>BGN17.90</h6>
                                        <button style={{
                                            backgroundColor: '#ffbe33',
                                            color: '#ffffff',
                                            marginRight: '10px',
                                            marginLeft: '120px',
                                            borderRadius: '20px'
                                        }}>Details</button>
                                        <a href="">
                                            <svg
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
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 all pizza">
                        <div className="box">
                            <div>
                                <div className="img-box">
                                    <img src="images/pizzas/american-hot.png" alt="american" />
                                </div>
                                <div className="detail-box">
                                    <h5>American Hot</h5>
                                     <p>
                                        Thin Italian Style dough with mozzarella stuffed crust, tomato sauce, mozzarella, pepperoni, spicy jalapeno peppers, onions
                                    </p> 
                                    <div className="options">
                                        <h6>BGN16.90</h6>
                                        <button style={{
                                            backgroundColor: '#ffbe33',
                                            color: '#ffffff',
                                            marginRight: '10px',
                                            marginLeft: '120px',
                                            borderRadius: '20px'
                                        }}>Details</button>
                                        <a href="">
                                            <svg
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
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 all pasta">
                        <div className="box">
                            <div>
                                <div className="img-box">
                                    <img src="images/pizzas/garden-classic.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>Garden Classic</h5>
                                     <p>
                                        Freshly baked, topped with mozzarella and the special Pizza Pal's seasoning, served with tomato dip
                                    </p> 
                                    <div className="options">
                                        <h6>BGN14.90</h6>
                                        <button style={{
                                            backgroundColor: '#ffbe33',
                                            color: '#ffffff',
                                            marginRight: '10px',
                                            marginLeft: '120px',
                                            borderRadius: '20px'
                                        }}>Details</button>
                                        <a href="">
                                            <svg
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
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 all fries">
                        <div className="box">
                            <div>
                                <div className="img-box">
                                    <img src="images/pizzas/hawaiian.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>Hawaiian Pizza</h5>
                                     <p>
                                        Five crispy mozzarella sticks with Barbecue dip. Excellent start for a delicious meal. Do not miss!
                                    </p> 
                                    <div className="options">
                                        <h6>BGN14.90</h6>
                                        <button style={{
                                            backgroundColor: '#ffbe33',
                                            color: '#ffffff',
                                            marginRight: '10px',
                                            marginLeft: '120px',
                                            borderRadius: '20px'
                                        }}>Details</button>
                                        <a href="">
                                            <svg
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
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 all pizza">
                        <div className="box">
                            <div>
                                <div className="img-box">
                                    <img src="images/pizzas/bbq-chicken.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>BBQ Chicken Pizza</h5>
                                     <p>
                                        Oven baked chicken nuggets in a spicy breadcrumb coating. Served with Barbecue dip
                                    </p> 
                                    <div className="options">
                                        <h6>BGN16.90</h6>
                                        <button style={{
                                            backgroundColor: '#ffbe33',
                                            color: '#ffffff',
                                            marginRight: '10px',
                                            marginLeft: '120px',
                                            borderRadius: '20px'
                                        }}>Details</button>
                                        <a href="">
                                            <svg
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
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 all burger">
                        <div className="box">
                            <div>
                                <div className="img-box">
                                    <img src="images/pizzas/carbonara.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>Carbonara</h5>
                                     <p>
                                        Ranch sauce, provolone, white feta cheese, fresh tomatoes, black olives, fresh green peppers.
                                    </p> 
                                    <div className="options">
                                        <h6>BGN15.90</h6>
                                        <button style={{
                                            backgroundColor: '#ffbe33',
                                            color: '#ffffff',
                                            marginRight: '10px',
                                            marginLeft: '120px',
                                            borderRadius: '20px'
                                        }}>Details</button>
                                        <a href="">
                                            <svg
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
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 all burger">
                        <div className="box">
                            <div>
                                <div className="img-box">
                                    <img src="images/pizzas/italian-classic.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>Italian Classic</h5>
                                     <p>
                                        Chocolate brownie with white chocolate chips. A perfect tip for completing your meal.
                                    </p> 
                                    <div className="options">
                                        <h6>BGN15.90</h6>
                                        <button style={{
                                            backgroundColor: '#ffbe33',
                                            color: '#ffffff',
                                            marginRight: '10px',
                                            marginLeft: '120px',
                                            borderRadius: '20px'
                                        }}>Details</button>
                                        <a href="">
                                            <svg
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
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 all pasta">
                        <div className="box">
                            <div>
                                <div className="img-box">
                                    <img src="images/pizzas/extravaganza.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>Extravaganza</h5>
                                     <p>
                                        Freshly oven baked puff pastry filled with Nutella spread and sprinkled with icing sugar.
                                    </p> 
                                    <div className="options">
                                        <h6>BGN17.90</h6>
                                        <button style={{
                                            backgroundColor: '#ffbe33',
                                            color: '#ffffff',
                                            marginRight: '10px',
                                            marginLeft: '120px',
                                            borderRadius: '20px'
                                        }}>Details</button>
                                        <a href="">
                                            <svg
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
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {visibleProducts < filteredProducts.length && 
            <div className="btn-box" onClick={loadMore}>
                <a href="">View More</a>
            </div>}
        </div>
    </section>);
}