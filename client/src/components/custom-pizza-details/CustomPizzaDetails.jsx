import { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import './CustomPizzaDetails.css'

import * as customPizzaService from '../../services/customPizzaService';
import Paths from '../../constants/Paths';
import { pathToUrl } from '../../utils/pathUtil';
import { formatDate } from '../../utils/dateUtil'
import AuthContext from '../../contexts/AuthContext';


export default function CustomPizzaDetails() {

    const { pizzaId } = useParams();
    const [pizza, setPizza] = useState({});
    const [shownButtons, setShownButtons] = useState(true);
    const [shownDelete, setShownDelete] = useState(false);
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext)

    useEffect(() => {
        customPizzaService.getPizzaDetails(pizzaId)
            .then(setPizza)
            .catch((err) => console.log(err))
    }, [pizzaId]);

    const handleShowButtons = () => {
        setShownButtons(false);
        setShownDelete(true);
    }

    const onClickCloseHandler = () => {
        setShownButtons(true);
        setShownDelete(false);
    }

    const deleteHandler = async (e) => {
        try {

            await customPizzaService.deletePizza(pizzaId);
            navigate(Paths.CustomPizzaList)

        } catch (err) {
            console.log(err);
        }
    }

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
                        <span className='details-content'> {pizza.creator?.username}</span>
                    </p>
                    <p>
                        <span className='details-property'>Published On:</span>
                        <span className='details-content'> {formatDate(pizza._createdOn)}</span>
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
                    {userId === pizza._ownerId && shownButtons && (
                        <div className='buttons'>
                            <Link to={pathToUrl(Paths.CustomPizzaEdit, { pizzaId })}> <button className="edit-button">Edit</button></Link>
                            <button onClick={handleShowButtons} className="delete-button">Delete</button>
                        </div>)}
                  
                    {shownDelete && <div>
                        <p className="confirm-deletion">Are you sure you want to permanently delete that pizza?</p>
                        <button onClick={deleteHandler} className="confirm-delete">YES</button>
                        <button onClick={onClickCloseHandler} className="not-confirm-delete">NO</button>
                    </div>}
                </div>
            </section >


        </>
    )
};
