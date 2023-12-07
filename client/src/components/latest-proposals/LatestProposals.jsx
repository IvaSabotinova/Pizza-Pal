import { useState, useEffect } from "react";

import * as productService from '../../services/productService';

import LatestProposalsItem from "./LatestProposalsItem";


const LatestProposals = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getLatestThree()
            .then((res) => setProducts(res))
            .catch((err) => console.log(err))
    }, []);

    return (
        <section className="food_section layout_padding-bottom">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>Our Latest Proposals</h2>
                </div>
                <div className="filters-content">
                    <div className="row grid">
                        {products.slice(0, 3).map(prod => (<LatestProposalsItem key={prod._id} {...prod} />))}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default LatestProposals;