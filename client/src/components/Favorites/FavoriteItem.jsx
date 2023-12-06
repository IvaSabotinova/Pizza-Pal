import { Link } from 'react-router-dom';

import Paths from '../../constants/Paths';
import { pathToUrl } from '../../utils/pathUtil';

const FavoriteItem = ({
    _id,
    type,
    name,
    ingredients,
    imageUrl,
    price,
}) => {
    const buttonText = name === 'Make Your Custom Pizza' ? 'Proceed' : 'Details';
    const image = imageUrl.startsWith('https') ? imageUrl : `images/${imageUrl}`
    return (
        <div className="col-sm-6 col-lg-4 all pizza">
            <div className="box">
                <div>
                    <div className="img-box">
                        <img src={image} alt="product" />
                    </div>
                    <div className="detail-box">
                        <h5>{name}</h5>
                        <div className="options">
                            <h6>BGN{type === 'pizza' ? price["Medium - 6 slices"].toFixed(2) : price.default.toFixed(2)}</h6>
                            <Link to={buttonText === 'Proceed' ? Paths.CreatePizza : pathToUrl(Paths.ProductDetails, { productId: _id })}>
                                <button style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    backgroundColor: '#ffbe33',
                                    color: '#ffffff',
                                    marginLeft: '150px',
                                    borderRadius: '20px',
                                    padding: '8px 17px',
                                    border: 'none',
                                }} >{buttonText}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavoriteItem;