import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './ProductEdit.css';

import * as productService from '../../services/productService';
import Paths from '../../constants/Paths';
import { pathToUrl } from '../../utils/pathUtil';

const formInitialValues = {
    name: '',
    type: '',
    ingredients: '',
    imageUrl: '',
    price: 0,
    "Medium - 6 slices": 0,
    "Large - 8 slices": 0,
    "Jumbo - 12 slices": 0
}

const errorsInitialState = {
    name: '',
    type: '',
    ingredients: '',
    imageUrl: '',
    price: '',
}

export default function ProductEdit() {
    const { productId } = useParams();
    const [product, setProduct] = useState(formInitialValues);
    const [errors, setErrors] = useState(errorsInitialState);
    const navigate = useNavigate();
    const nameRef = useRef();

    useEffect(() => {
        productService.getProductById(productId)
            .then(setInitialProductData)
            .catch((err) => console.log(err))

    }, [productId]);

    useEffect(() => {
        nameRef.current.focus();
    }, []);


    const validateName = () => {
        if (product.name.length < 2 || product.name.length > 30) {
            setErrors(state => ({ ...state, name: 'Name must be between 2 and 30 characters!' }));
        } else {
            setErrors(state => ({ ...state, name: '' }));
        }
    };

    const validateType = () => {
        if (!product.type) {
            setErrors(state => ({ ...state, type: 'Please choose type!' }));
        } else {
            setErrors(state => ({ ...state, type: '' }));
        }
    };

    const validateIngredients = () => {
        if (product.type !== 'drink') {
            if (product.ingredients.length < 10 || product.ingredients.length > 300) {
                setErrors(state => ({ ...state, ingredients: 'Ingredients must be between 10 and 300 characters!' }));
            } else {
                setErrors(state => ({ ...state, ingredients: '' }));
            }
        }
    };

    const validateImageUrl = () => {
        const imageUrlRegex = /^https:\/\/.+$/;
        const isValidImageUrl = imageUrlRegex.test(product.imageUrl);

        if (!isValidImageUrl) {
            setErrors(state => ({ ...state, imageUrl: 'Invalid image url!' }))
        } else {
            setErrors(state => ({ ...state, imageUrl: '' }))
        }
    };

    const validatePrice = () => {
        if ((product.type !== 'pizza' && product.price < 0)
            || (product.type === 'pizza' && product["Medium - 6 slices"] < 0)
            || (product.type === 'pizza' && product["Large - 8 slices"] < 0)
            || (product.type === 'pizza' && product["Jumbo - 12 slices"] < 0)) {
            setErrors(state => ({ ...state, price: 'Price cannot be negative!' }));
        } else {
            setErrors(state => ({ ...state, price: '' }));
        }
    };

    const setInitialProductData = (productData) => {
        if (productData.type === 'pizza') {
            setProduct({
                ...productData,
                "Medium - 6 slices": productData.price["Medium - 6 slices"],
                "Large - 8 slices": productData.price["Large - 8 slices"],
                "Jumbo - 12 slices": productData.price["Jumbo - 12 slices"],
                price: 0

            })
        } else {
            setProduct({
                ...productData,
                price: productData.price.default,
                "Medium - 6 slices": 0,
                "Large - 8 slices": 0,
                "Jumbo - 12 slices": 0,
            })
        }
    }

    const changeHandler = (e) => {
        let value = '';
        switch (e.target.type) {
            case 'number': value = Number(e.target.value); break;
            default: value = e.target.value; break
        }
        setProduct(state => ({ ...state, [e.target.name]: value }));
    }

    const editProductHandler = async (e) => {
        e.preventDefault();
        validateName();
        validateType();
        validateIngredients();
        validateImageUrl();
        validatePrice();

        if (errors.name != ''
            || errors.type != ''
            || errors.ingredients != ''
            || errors.imageUrl != ''
            || errors.price != ''
            || (product.type !== 'drink' && Object.values(product).some(x => x === ''))
            || (product.type === 'drink' && Object.keys(product).some(key => key !== 'ingredients' && product[key] === ''))) {


            return;
        }

        let price = {};
        if (product.type === 'pizza') {
            price = {
                "Medium - 6 slices": product["Medium - 6 slices"],
                "Large - 8 slices": product["Large - 8 slices"],
                "Jumbo - 12 slices": product["Jumbo - 12 slices"]
            }
        }
        else {
            price = {
                default: product.price
            }
        }

        const productToEdit = {
            name: product.name,
            type: product.type,
            ingredients: product.ingredients,
            imageUrl: product.imageUrl,
            price: price
        }

        try {
            const editedProduct = await productService.updateProduct(productId, productToEdit);

            navigate(pathToUrl(Paths.ProductDetails, { productId }));
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <section className="edit-product_section product_layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2 className="text-center mx-auto">Edit Product</h2>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-lg-1">
                        <div className="form_container">
                            <form action="" className="edit-product_form" onSubmit={editProductHandler}>
                                <div >
                                    <label className="heading_label" htmlFor="name">Name</label>
                                    <input className="form-control" placeholder="Name your product..."
                                        id='name'
                                        type="text"
                                        name='name'
                                        value={product.name}
                                        onChange={changeHandler}
                                        onBlur={validateName}
                                        ref={nameRef}
                                    />
                                    {errors.name && (<p className="errorMessage">{errors.name}</p>)}
                                </div>
                                <div>
                                    <label className="heading_label" htmlFor="type">Type</label>
                                    <select className="form-control"
                                        id="type"
                                        name="type"
                                        value={product.type}
                                        onChange={changeHandler}
                                        onBlur={validateType}
                                    >
                                        <option value="" disabled="" >Choose type?</option>
                                        <option value="pizza">Pizza</option>
                                        <option value="starter">Starter</option>
                                        <option value="dessert">Dessert</option>
                                        <option value="drink">Drink</option>
                                    </select>
                                    {errors.type && (<p className="errorMessage">{errors.type}</p>)}
                                </div>
                                {product.type !== 'drink' &&
                                    <div >
                                        <label className="heading_label" htmlFor="ingredients">Ingredients:</label>
                                        <input className="form-control" placeholder="Write ingredients..."
                                            id='ingredients'
                                            type="text"
                                            name='ingredients'
                                            value={product.ingredients}
                                            onChange={changeHandler}
                                            onBlur={validateIngredients}

                                        />
                                        {errors.ingredients && (<p className="errorMessage">{errors.ingredients}</p>)}
                                    </div>
                                }
                                <div>
                                    <label className="heading_label" htmlFor="imageUrl">Add photo url</label>
                                    <input className="form-control" placeholder="Add image url"
                                        id="imageUrl"
                                        name="imageUrl"
                                        type="text"
                                        value={product.imageUrl}
                                        onChange={changeHandler}
                                        onBlur={validateImageUrl}
                                    />
                                    {errors.imageUrl && (<p className="errorMessage">{errors.imageUrl}</p>)}
                                </div>
                                {product.type === 'pizza' &&
                                    <div>
                                        <p className="heading_label">Price per size</p>
                                        <div className='pizza-sizes'>
                                            <div className='pizza-size-01'>
                                                <label htmlFor="Medium - 6 slices">Medium - 6 slices</label>
                                                <input id="Medium - 6 slices"
                                                    type="number"
                                                    name="Medium - 6 slices"
                                                    value={product["Medium - 6 slices"]}
                                                    onChange={changeHandler}
                                                    onBlur={validatePrice}
                                                />
                                            </div>
                                            <div className='pizza-size-02'>
                                                <label htmlFor="Large - 8 slices">Large - 8 slices</label>
                                                <input id="Large - 8 slices"
                                                    type="number"
                                                    name="Large - 8 slices"
                                                    value={product["Large - 8 slices"]}
                                                    onChange={changeHandler}
                                                    onBlur={validatePrice}
                                                />
                                            </div>
                                            <div className='pizza-size-03'>
                                                <label htmlFor="Jumbo - 12 slices">Jumbo - 12 slices</label>
                                                <input id="Jumbo - 12 slices"
                                                    type="number"
                                                    name="Jumbo - 12 slices"
                                                    value={product["Jumbo - 12 slices"]}
                                                    onChange={changeHandler}
                                                    onBlur={validatePrice}
                                                />
                                            </div>
                                        </div>
                                        {errors.price && (<p className="errorMessage">{errors.price}</p>)}
                                    </div>
                                }
                                {(product.type !== 'pizza' || product.type === '') &&
                                    <div >
                                        <label className="heading_label" htmlFor="price">Price</label>
                                        <input className="form-control" placeholder="Write product price..."
                                            id='price'
                                            type="number"
                                            name='price'
                                            value={product.price}
                                            onChange={changeHandler}
                                            onBlur={validatePrice}
                                        />
                                        {errors.price && (<p className="errorMessage">{errors.price}</p>)}
                                    </div>
                                }

                                <div className="btn_box offset-3">
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}