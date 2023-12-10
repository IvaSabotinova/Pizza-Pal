import { useState, useEffect, useContext } from "react";

import './MyCustomPizzas.css';

import * as customPizzaService from '../../services/customPizzaService';
import AuthContext from "../../contexts/AuthContext";

import MyCustomPizzaItem from "./MyCustomPizzaItem";

export default function MyCustomPizzas() {
    const { userId, isAuthenticated } = useContext(AuthContext)

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        customPizzaService.getAllByOwnerIdDesc(userId)
            .then(setPizzas)
            .catch((err) => console.log(err))
    }, [userId]);

    return (
        <>
            <section className="food_section layout_padding-bottom">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2 style={{ marginTop: '20px' }}>My Custom Pizzas</h2>
                    </div>
                    <div className="filters-content">
                        <div className="row grid">
                            {pizzas.length === 0 &&
                                (<div className="centered-container">
                                    <p className="empty-list">There are no pizzas to display!!!</p>
                                </div>)}
                            {pizzas.length > 0 && pizzas.map(p => (<MyCustomPizzaItem key={p._id} {...p} />))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}