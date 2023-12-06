import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './ProductCreate.css';

import * as productService from '../../services/productService';
import Paths from '../../constants/Paths';
import { pathToUrl} from '../../utils/pathUtil';

const formInitialValues = {
    name: '',
    type: '',
    ingredients: '',
    imageUrl: '',
    price: 0,
    "Medium - 6 slices": 0,
    "Large - 8 slices": 0,
    "Jumbo - 12 slices": 0,    
}

const errorsInitialState = {
    name: '',
    type: '',
    ingredients: '',
    imageUrl: '',
    price: '',
}

export default function ProductCreate() {
    const [formValues, setFormValues] = useState(formInitialValues);
    const [errors, setErrors] = useState(errorsInitialState)
    const navigate = useNavigate();
    const nameRef = useRef();

    useEffect(() => {
        nameRef.current.focus();
    }, [])


    const validateName = () => {
        if (formValues.name.length < 2 || formValues.name.length > 30) {
            setErrors(state => ({ ...state, name: 'Name must be between 2 and 30 characters!' }));
        } else {
            setErrors(state => ({ ...state, name: '' }));
        }
    };

    const validateType = () => {
        if (!formValues.type) {
            setErrors(state => ({ ...state, type: 'Please choose type!' }));
        } else {
            setErrors(state => ({ ...state, type: '' }));
        }
    };

    const validateIngredients = () => {
        if (formValues.type !== 'drink') {
            if (formValues.ingredients.length < 10 || formValues.ingredients.length > 300) {
                setErrors(state => ({ ...state, ingredients: 'Ingredients must be between 10 and 300 characters!' }));
            } else {
                setErrors(state => ({ ...state, ingredients: '' }));
            }
        }
    };

    const validateImageUrl = () => {
        const imageUrlRegex = /^https:\/\/.+$/;
        const isValidImageUrl = imageUrlRegex.test(formValues.imageUrl);

        if (!isValidImageUrl) {
            setErrors(state => ({ ...state, imageUrl: 'Invalid image url!' }))
        } else {
            setErrors(state => ({ ...state, imageUrl: '' }))
        }
    };

    const validatePrice = () => {
        if ((formValues.type !== 'pizza' && formValues.price < 0)
            || (formValues.type === 'pizza' && formValues["Medium - 6 slices"] < 0)
            || (formValues.type === 'pizza' && formValues["Large - 8 slices"] < 0)
            || (formValues.type === 'pizza' && formValues["Jumbo - 12 slices"] < 0)) {
            setErrors(state => ({ ...state, price: 'Price cannot be negative!' }));
        } else {
            setErrors(state => ({ ...state, price: '' }));
        }
    };

    const changeHandler = (e) => {
        let value = '';
        switch (e.target.type) {
            case 'number': value = Number(e.target.value); break;
            default: value = e.target.value; break
        }
        setFormValues(state => ({ ...state, [e.target.name]: value }));
    }

    const createProductHandler = async (e) => {
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
            || (formValues.type !== 'drink' && Object.values(formValues).some(x=>x === ''))
            || (formValues.type === 'drink' && Object.keys(formValues).some(key => key !== 'ingredients' && formValues[key] === ''))) {         
            

            return;
        }

        let price = {};
        if (formValues.type === 'pizza') {
            price = {
                "Medium - 6 slices": formValues["Medium - 6 slices"],
                "Large - 8 slices": formValues["Large - 8 slices"],
                "Jumbo - 12 slices": formValues["Jumbo - 12 slices"]
            }
        }
        else {
            price = {
                default: formValues.price
            }
        }

        const product = {
            name: formValues.name,
            type: formValues.type,
            ingredients: formValues.ingredients,
            imageUrl: formValues.imageUrl,
            price: price
        }
        try {
            const newProduct = await productService.createProduct(product);
            navigate(pathToUrl( Paths.ProductDetails, {productId: newProduct._id}));

        } catch (err) {
            console.log(err)
        }


    }

    return (
        <section className="create-product_section product_layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2 className="text-center mx-auto">Create New Product</h2>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-lg-1">
                        <div className="form_container">
                            <form action="" className="create-product_form" onSubmit={createProductHandler}>
                                <div >
                                    <label className="heading_label" htmlFor="name">Name</label>
                                    <input className="form-control" placeholder="Name your product..."
                                        id='name'
                                        type="text"
                                        name='name'
                                        value={formValues.name}
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
                                        value={formValues.type}
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
                                {formValues.type !== 'drink' &&
                                    <div >
                                        <label className="heading_label" htmlFor="ingredients">Ingredients:</label>
                                        <input className="form-control" placeholder="Write ingredients..."
                                            id='ingredients'
                                            type="text"
                                            name='ingredients'
                                            value={formValues.ingredients}
                                            onChange={changeHandler}
                                            onBlur={validateIngredients}

                                        />
                                        {errors.ingredients && (<p className="errorMessage">{errors.ingredients}</p>)}
                                    </div>}
                                <div>
                                    <label className="heading_label" htmlFor="imageUrl">Add photo url</label>
                                    <input className="form-control" placeholder="Add image url"
                                        id="imageUrl"
                                        name="imageUrl"
                                        type="text"
                                        value={formValues.imageUrl}
                                        onChange={changeHandler}
                                        onBlur={validateImageUrl}
                                    />
                                    {errors.imageUrl && (<p className="errorMessage">{errors.imageUrl}</p>)}
                                </div>
                                {formValues.type === 'pizza' &&
                                    <div>
                                        <p className="heading_label">Price per size</p>
                                        <div className='pizza-sizes'>
                                            <div className='pizza-size-01'>
                                                <label htmlFor="Medium - 6 slices">Medium - 6 slices</label>
                                                <input id="Medium - 6 slices"
                                                    type="number"
                                                    name="Medium - 6 slices"
                                                    value={formValues["Medium - 6 slices"]}
                                                    onChange={changeHandler}
                                                    onBlur={validatePrice} />
                                            </div>
                                            <div className='pizza-size-02'>
                                                <label htmlFor="Large - 8 slices">Large - 8 slices</label>
                                                <input id="Large - 8 slices"
                                                    type="number"
                                                    name="Large - 8 slices"
                                                    value={formValues["Large - 8 slices"]}
                                                    onChange={changeHandler}
                                                    onBlur={validatePrice} />
                                            </div>
                                            <div className='pizza-size-03'>
                                                <label htmlFor="Jumbo - 12 slices">Jumbo - 12 slices</label>
                                                <input id="Jumbo - 12 slices"
                                                    type="number"
                                                    name="Jumbo - 12 slices"
                                                    value={formValues["Jumbo - 12 slices"]}
                                                    onChange={changeHandler}
                                                    onBlur={validatePrice} />
                                            </div>
                                        </div>
                                        {errors.price && (<p className="errorMessage">{errors.price}</p>)}
                                    </div>}
                                {(formValues.type !== 'pizza' || formValues.type === '') &&
                                    <div >
                                        <label className="heading_label" htmlFor="price">Price</label>
                                        <input className="form-control" placeholder="Write product price..."
                                            id='price'
                                            type="number"
                                            name='price'
                                            value={formValues.price}
                                            onChange={changeHandler}
                                            onBlur={validatePrice}
                                        />
                                        {errors.price && (<p className="errorMessage">{errors.price}</p>)}
                                    </div>}

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