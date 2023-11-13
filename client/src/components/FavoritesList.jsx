import { useState, useEffect } from "react";
import * as productService from '../services/productService';
import FavoriteItem from "./FavoriteItem";

const FavoritesList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAll()
            .then((res) => setProducts(res))
            .catch((err) => console.log(err))
    }, []);

    return (
        <section className="food_section layout_padding-bottom">
        <div className="container">
            <div className="heading_container heading_center">
                <h2>Top Favorites</h2>
            </div>
            {/* <ul className="filters_menu">
                <li className={activeFilter === '*' ? 'active' : ''} onClick={() => filterProducts('*')} data-filter="*"> All </li>
                <li className={activeFilter === 'pizza' ? 'active' : ''} onClick={() => filterProducts('pizza')} data-filter=".pizza">Pizzas</li>
                <li className={activeFilter === 'starter' ? 'active' : ''} onClick={() => filterProducts('starter')} data-filter=".starter">Starters</li>
                <li className={activeFilter === 'dessert' ? 'active' : ''} onClick={() => filterProducts('dessert')} data-filter=".dessert">Desserts</li>
                <li className={activeFilter === 'drink' ? 'active' : ''} onClick={() => filterProducts('drink')} data-filter=".drink">Drinks</li>
            </ul> */}
            <div className="filters-content">
                <div className="row grid">
                    {products.slice(0, 3).map(prod => (<FavoriteItem key={prod.id} {...prod} />))}

                </div>
            </div>

            {/* {visibleProducts < filteredProducts.length &&
                <div className="btn-box" onClick={loadMore}>
                    <a href="">View More</a>
                </div>} */}
        </div>
    </section>
    );
}

export default FavoritesList;