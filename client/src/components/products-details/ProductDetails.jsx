import { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import './ProductDetails.css';

import * as productService from '../../services/productService';
import AuthContext from '../../contexts/AuthContext';
import Paths from '../../constants/Paths';
import { pathToUrl } from '../../utils/pathUtil';

export default function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { email } = useContext(AuthContext);
    const [selectedSize, setSelectedSize] = useState("Medium - 6 slices");
    const [shownButtons, setShownButtons] = useState(true);
    const [shownDelete, setShownDelete] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        productService.getProductById(productId)
            .then(setProduct)
            .catch((err) => console.log(err))
    }, [productId]);

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleShowButtons = () => {
        setShownButtons(false);
        setShownDelete(true);
    };

    const onClickCloseHandler = () => {
        setShownButtons(true);
        setShownDelete(false);
    };

    const deleteHandler = async (e) => {
        try {
            await productService.deleteProduct(productId);
            navigate(Paths.Menu)
        } catch (err) {
            console.log(err);
        }

    }

    const image = product.imageUrl?.startsWith('https') ? product.imageUrl : `images/${product.imageUrl}`;

    return (<>
        <div className='products-wrapper'>
            <h1 className='product-name'>{product.name}</h1>
            < section className="details-section" >

                <div className='container-img'>
                    <img src={image} alt={product.name} className="details-img" />
                </div>
                <div className="product-info">
                    <p>
                        <span className='details-property'>Type:</span>
                        <span className='details-content'> {product.type}</span>
                    </p>
                    {product.type !== 'drink' &&
                        <p>
                            <span className='details-property'>Ingredients:</span>
                            <span className='details-content'> {product.ingredients}</span>
                        </p>}
                    {product.type !== 'pizza' &&
                        <p>
                            <span className='details-property'>Price:</span>
                            <span className='details-content'> BGN {product.price?.default.toFixed(2)}</span>
                        </p>}
                    {product.type === 'pizza' && (
                        <>
                            <p>
                                <span className='details-property'>Price:</span>
                                <span className='details-content'> BGN {product.price[selectedSize].toFixed(2)}</span>
                            </p>
                            <div className='size-container'>
                                <span className='details-property'>Choose size:</span>
                                <div className='changing-buttons'>
                                    {Object.keys(product.price).map((key) => (
                                        <span key={key}
                                            className={`size-details-content ${selectedSize === key ? 'selected' : ''}`}
                                            onClick={() => handleSizeChange(key)}>
                                            {key}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {email === 'admin@abv.bg' && shownButtons && (
                        <div className='admin-buttons'>
                            <Link to={pathToUrl(Paths.ProductEdit, { productId })}>
                                <button className="edit-admin">Edit</button>
                            </Link>
                            <button onClick={handleShowButtons} className="delete-admin">Delete</button>

                        </div>)}

                    {email === 'admin@abv.bg' && shownDelete && <div>
                        <p className="confirm-deletion">Are you sure you want to permanently delete that pizza?</p>
                        <button onClick={deleteHandler} className="confirm-delete">YES</button>
                        <button onClick={onClickCloseHandler} className="not-confirm-delete">NO</button>
                    </div>}
                </div>
            </section >
        </div>
    </>

    );
}


