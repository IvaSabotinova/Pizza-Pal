import './MyCustomPizzas.css'

import { Link } from 'react-router-dom';

import Paths from '../../constants/Paths';
import { pathToUrl } from '../../utils/pathUtil';

const MyCustomPizzaItem = ({
    _id,
    name,
    size,
    ingredients,
    imageUrl,
    description,
}) => {
    const imageSrc = imageUrl ? imageUrl : "../../images/pizzas/custom-pizza.png";
    return (
        <>
            <div className="col-sm-6 col-lg-4 all pizza">
                <div className="box">
                    <div>
                        <div className="img-box">
                            <img src={imageSrc} alt="custom-pizza" />
                        </div>
                        <div className="detail-box">
                            <h5><span>Name:</span> {name}</h5>
                            <br />
                            <p><span>Ingredients:</span> {ingredients}</p>
                            <div className="button-options">
                                <Link to={pathToUrl(Paths.CustomPizzaDetails, { pizzaId: _id })}><button>Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyCustomPizzaItem;