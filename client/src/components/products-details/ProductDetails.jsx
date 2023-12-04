import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ProductDetails.css';

import * as productService from '../../services/productService';
import AuthContext from '../../contexts/AuthContext';

export default function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { email } = useContext(AuthContext);
    const [selectedSize, setSelectedSize] = useState(0);

    useEffect(() => {
        productService.getProductById(productId)
            .then(setProduct)
            .catch((err) => console.log(err))
    }, [productId]);

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };



    return (<>
        <div className='products-wrapper'>
            <h1 className='product-name'>{product.name}</h1>
            < section className="details-section" >

                <div className='container-img'>
                    <img src={`images/${product.imageUrl}`} alt={product.name} className="details-img" />
                </div>
                <div className="product-info">
                    {/* <p>
                        <span className='details-property'>Name:</span>
                        <span className='details-content'> {product.name}</span>
                    </p> */}
                    {/* <p>
                        <span className='details-property'>Type:</span>
                        <span className='details-content'> {product.type}</span>
                    </p> */}
                    {/* <p>
                        <span className='details-property'>Published On:</span>
                        <span className='details-content'> {formatDate(product._createdOn)}</span>
                    </p> */}
                    {product.type !== 'drink' &&
                        <p>
                            <span className='details-property'>Ingredients:</span>
                            <span className='details-content'> {product.ingredients}</span>
                        </p>}
                    {product.type !== 'pizza' &&
                        <p>
                            <span className='details-property'>Price:</span>
                            <span className='details-content'> BGN {product?.price?.[0].toFixed(2)}</span>
                        </p>}
                    {/* {product.type === 'pizza' &&
                        <p>
                            <span className='details-property'>Size:</span>
                            <span className='pizza-details-content'> {product?.size?.[0]}</span>
                            <span className='pizza-details-content'> {product?.size?.[1]}</span>
                            <span className='pizza-details-content'> {product?.size?.[2]}</span>
                        </p>} */}

                    {product.type === 'pizza' && (
                        <>
                            <p>
                                <span className='details-property'>Price:</span>
                                <span className='details-content'> BGN {product.price[selectedSize].toFixed(2)}</span>
                            </p>
                            <div className='size-container'>
                                <span className='details-property'>Choose size:</span>
                                <p className='empty-line'></p>
                                {product.size.map((sizeOption, index) => (
                                    <span key={index}
                                        className={`pizza-details-content ${selectedSize === index ? 'selected' : ''}`}
                                        onClick={() => handleSizeChange(index)}>
                                        {sizeOption}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}

                    {email === 'admin@abv.bg' && (
                        <div className='buttons'>
                            {/* <Link to={pathToUrl(Paths.CustomPizzaEdit, { pizzaId })}>  */}
                            <button className="edit-button">Edit</button>
                            {/* </Link> */}
                            {/* <button onClick={handleShowButtons} className="delete-button">Delete</button> */}
                            <button className="delete-button">Delete</button>
                        </div>)}

                    {/* {shownDelete && <div>
                        <p className="confirm-deletion">Are you sure you want to permanently delete that pizza?</p>
                        <button onClick={deleteHandler} className="confirm-delete">YES</button>
                        <button onClick={onClickCloseHandler} className="not-confirm-delete">NO</button>
                    </div>} */}
                </div>
            </section >
        </div>
    </>

    );
}


