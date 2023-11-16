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
                <div className="filters-content">
                    <div className="row grid">
                        {products.slice(0, 3).map(prod => (<FavoriteItem key={prod.id} {...prod} />))}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default FavoritesList;