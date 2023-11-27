import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import './CustomPizzaDetails.css'

import * as customPizzaService from '../../services/customPizzaService';
import Paths from '../../constants/Paths';
import { pathToUrl } from '../../utils/pathUtil';

export default function CustomPizzaDetails() {

    const { pizzaId } = useParams();
    const [pizza, setPizza] = useState({});

    useEffect(() => {
        customPizzaService.getPizzaDetails(pizzaId)
            .then(setPizza)
            .catch((err) => console.log(err))
    }, [pizzaId]);

    const imageSrc = pizza?.imageUrl ? pizza?.imageUrl : "../../images/pizzas/custom-pizza.png";
    return (

        < section className="details-wrapper" >
            <div className='container-img'>
                <img src={imageSrc} alt={pizza.name} className="details-img" />
            </div>
            <div className="details-info">
                <p>
                    <span className='details-property'>Name:</span>
                    <span className='details-content'> {pizza.name}</span>
                </p>
                <p>
                    <span className='details-property'>Creator:</span>
                    <span className='details-content'>{' To be advised :)'}</span>
                </p>
                <p>
                    <span className='details-property'>Size:</span>
                    <span className='details-content'> {pizza.size}</span>
                </p>
                <p>
                    <span className='details-property'>Ingredients:</span>
                    <span className='details-content'> {pizza.ingredients}</span>
                </p>
                <p>
                    <span className='details-property'>Description:</span>
                    <span className='details-content'> {pizza.description}</span>
                </p>
                <div className='buttons'>
                    <Link to={pathToUrl(Paths.CustomPizzaEdit, { pizzaId })}> <button className="edit-button">Edit</button></Link>
                    <button className="delete-button">Delete</button>
                </div>
            </div>
        </section >
    );
}