import { useState, useEffect } from "react";

import * as productService from '../../services/productService';

import LatestProposalsItem from "./LatestProposalsItem";
import Loader from "../loader/Loader";


const LatestProposals = () => {
    const [products, setProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);

    useEffect(() => {
        productService.getLatestThree()
            .then((res) => {
                setProducts(res);
                setLoadingProducts(false);
            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <section className="food_section layout_padding-bottom">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>Our Latest Proposals</h2>
                </div>
                {loadingProducts && <Loader />}
                <div className="filters-content">
                    {!loadingProducts && <div className="row grid">
                        {products.map(prod => (<LatestProposalsItem key={prod._id} {...prod} />))}

                    </div>}
                </div>
            </div>
        </section>
    );
}

export default LatestProposals;