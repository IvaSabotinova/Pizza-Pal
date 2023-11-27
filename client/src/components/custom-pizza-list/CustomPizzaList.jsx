import { useState, useEffect } from "react";

import * as customPizzaService from '../../services/customPizzaService';
import CustomPizzaListItem from "./CustomPizzaListItem";
import './CustomPizzaList.css'

export default function CustomPizzaList() {

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        customPizzaService.getAll()
            .then(setPizzas)
            .catch((err) => console.log(err))
    }, []);

    return (
        <>
            <section className="food_section layout_padding-bottom">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2 style={{ marginTop: '20px' }}>All Custom Pizzas</h2>
                    </div>
                    <div className="filters-content">
                        <div className="row grid">
                            {pizzas.length === 0 &&
                                (<div className="centered-container">
                                    <p className="empty-list">There are no pizzas to display!!!</p>
                                </div>)}
                            {pizzas.length > 0 && pizzas.map(p => (<CustomPizzaListItem key={p._id} {...p} />))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}