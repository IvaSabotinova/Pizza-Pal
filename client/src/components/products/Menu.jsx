import { useState, useEffect } from "react";

import './Menu.css';

import Product from "./Product";
import * as productService from '../../services/productService';
import Loader from "../loader/Loader";

const initialVisibleState = 6;

export default function Menu() {

    const [products, setProducts] = useState([]);
    const [activeType, setActiveType] = useState('*');
    const [visibleProducts, setVisibleProducts] = useState(initialVisibleState);
    const [typeCount, setTypeCount] = useState(0);
    const [loadingProducts, setLoadingProducts] = useState(true);

    useEffect(() => {
        productService.getAllByPage(activeType, visibleProducts)
            .then((res) => {
                setProducts(res);
                setLoadingProducts(false);
            })
            .catch((err) => console.log(err));

        productService.getProductsCountPerType(activeType)
            .then(setTypeCount)
            .catch((err) => console.log(err));

    }, [activeType, visibleProducts]);

    const changeType = (type) => {
        setActiveType(type);
        setVisibleProducts(initialVisibleState);
    }

    const loadMore = (e) => {
        e.preventDefault(); //Prevent the default behavior of scrolling to the top        
        setVisibleProducts(state => state + initialVisibleState);
    };

    return (
        <>
            <section className="food_section layout_padding-bottom">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2 className="menu">Our Menu</h2>
                    </div>
                    <ul className="filters_menu">
                        <li className={activeType === '*' ? 'active' : ''} onClick={() => changeType('*')} data-filter="*"> All </li>
                        <li className={activeType === 'pizza' ? 'active' : ''} onClick={() => changeType('pizza')} data-filter=".pizza">Pizzas</li>
                        <li className={activeType === 'starter' ? 'active' : ''} onClick={() => changeType('starter')} data-filter=".starter">Starters</li>
                        <li className={activeType === 'dessert' ? 'active' : ''} onClick={() => changeType('dessert')} data-filter=".dessert">Desserts</li>
                        <li className={activeType === 'drink' ? 'active' : ''} onClick={() => changeType('drink')} data-filter=".drink">Drinks</li>
                    </ul>
                    {loadingProducts && <Loader />}
                    {!loadingProducts &&
                        <>
                            <div className="filters-content">
                                <div className="row grid">
                                    {products.map(prod => (<Product key={prod._id} {...prod} />))}
                                </div>
                            </div>

                            {visibleProducts < typeCount &&
                                <div className="btn-box" onClick={loadMore}>
                                    <a href="">View More</a>
                                </div>
                            }
                        </>}

                </div>
            </section>
        </>
    );
}