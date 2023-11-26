import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import './PizzaDetails.css'

import * as customPizzaService from '../../services/customPizzaService';

export default function PizzaDetails() {

    const { pizzaId } = useParams();
    const [pizza, setPizza] = useState({});

    useEffect(() => {
        customPizzaService.getPizzaDetails(pizzaId)
            .then(setPizza)
            .catch((err) => console.log(err))
    }, [pizzaId]);

    const imageSrc = pizza?.imageUrl ? pizza?.imageUrl : "../../images/pizzas/custom-pizza.png";
    return (
        <>
     
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
                    <Link to={`/custom-pizzas/edit/${pizza._id}`}> <button className="edit-button">Edit</button></Link>
                    <button className="delete-button">Delete</button>
                </div>
            </div>
        </section >
        {/* <div className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div> */}
      </>
    );
}