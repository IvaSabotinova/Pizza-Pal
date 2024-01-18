import { useState, useEffect } from "react";

import './CustomPizzaList.css';

import * as customPizzaService from '../../services/customPizzaService';
import CustomPizzaListItem from "./CustomPizzaListItem";
import Loader from "../loader/Loader";

export default function CustomPizzaList() {

    const [pizzas, setPizzas] = useState([]);
    const [loadingPizzas, setLoadingPizzas] = useState(true);

    useEffect(() => {
        customPizzaService.getAllDesc()
            .then((res) => {
                setPizzas(res);
                setLoadingPizzas(false);
            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <>
            <section className="food_section layout_padding-bottom">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2 style={{ marginTop: '20px' }}>All Custom Pizzas</h2>
                    </div>
                    {loadingPizzas && <Loader />}
                    {!loadingPizzas &&
                        <div className="filters-content">
                            <div className="row grid">
                                {pizzas.length === 0 &&
                                    (<div className="centered-container">
                                        <p className="empty-list">There are no pizzas to display!!!</p>
                                    </div>)}
                                {pizzas.length > 0 && pizzas.map(p => (<CustomPizzaListItem key={p._id} {...p} />))}
                            </div>
                        </div>}
                </div>
            </section>
        </>
    );
}