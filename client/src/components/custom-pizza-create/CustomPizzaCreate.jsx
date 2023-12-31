import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './CustomPizzaCreate.css';

import * as customPizzaService from '../../services/customPizzaService';
import Paths from '../../constants/Paths';

const formInitialState = {
    name: '',
    size: '',
    ingredients: '',
    imageUrl: '',
    description: '',
    dough: false,
    pepperoni: false,
    'smoked-ham': false,
    bacon: false,
    chicken: false,
    cheese: false,
    mozzarella: false,
    mushrooms: false,
    olives: false,
    peppers: false,
    'barbecue-sauce': false,
    onions: false,
    tomatoes: false,
    'pesto-sauce': false,
    cream: false,
    basil: false,
}

const errorsInitialState = {
    name: '',
    size: '',
    ingredients: '',
    imageUrl: '',
    description: '',
}

export default function CreateCustomPizza() {
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState(errorsInitialState);
    const navigate = useNavigate();
    const nameRef = useRef();

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const validateName = () => {
        if (formValues.name.length < 2 || formValues.name.length > 30) {
            setErrors(state => ({ ...state, name: 'Name must be between 2 and 30 characters!' }));
        } else {
            setErrors(state => ({ ...state, name: '' }));
        }
    };

    const validateSize = () => {
        if (!formValues.size) {
            setErrors(state => ({ ...state, size: 'Please choose a size!' }));
        } else {
            setErrors(state => ({ ...state, size: '' }));
        }
    };

    const validateIngredients = () => {
        const atLeastOneChecked = Object.values(formValues)
            .filter(value => typeof value === 'boolean')
            .some((isChecked) => isChecked);
        if (!atLeastOneChecked) {
            setErrors(state => ({ ...state, ingredients: 'Please choose at least one ingredient!' }));
        } else {
            setErrors(state => ({ ...state, ingredients: '' }));
        }
    };

    const validateImageUrl = () => {
        const imageUrlRegex = /^https:\/\/.+$/;
        const isValidImageUrl = imageUrlRegex.test(formValues.imageUrl);

        if (formValues.imageUrl && !isValidImageUrl) {
            setErrors(state => ({ ...state, imageUrl: 'Invalid image url!' }))
        } else {
            setErrors(state => ({ ...state, imageUrl: '' }))
        }
    };

    const validateDescription = () => {
        if (formValues.description.length < 10 || formValues.description.length > 1000) {
            setErrors(state => ({ ...state, description: 'Description must be between 10 and 1000 characters.' }));
        } else {
            setErrors(state => ({ ...state, description: '' }));
        }
    };
    console.log(errors)
    const changeHandler = (e) => {
        let value = '';
        switch (e.target.type) {
            case 'checkbox': value = e.target.checked; break;
            default: value = e.target.value; break
        }
        setFormValues(state => ({ ...state, [e.target.name]: value }));
    }

    const createPizzaHandler = async (e) => {
        e.preventDefault();
        validateName();
        validateSize();
        validateIngredients();
        validateImageUrl();
        validateDescription();

        const ingredients = Object.entries(formValues)
            .filter(([property, value]) => value === true)
            .map(([property]) => property)
            .join(', ');
        formValues.ingredients = ingredients;

        if (errors.name != ''
            || errors.size != ''
            || errors.ingredients != ''
            || errors.imageUrl != ''
            || errors.description != ''
            || Object.keys(formValues).some(key => key !== 'imageUrl' && formValues[key] === '')) {

            return;
        }
        try {
            const newPizza = await customPizzaService.createCustomPizza(formValues);
            console.log(newPizza)
            console.log(errors)
            navigate(Paths.CustomPizzaList);

        } catch (err) {           
            console.log(err);
        }
    }


    return (
        <section className="create-pizza_section pizza_layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2 className="text-center mx-auto">Create Your Custom Pizza</h2>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-lg-1">
                        <div className="form_container">
                            <form action="" className="create-pizza_form" onSubmit={createPizzaHandler}>
                                <div >
                                    <label className="heading_label" htmlFor="name">Name</label>
                                    <input className="form-control" placeholder="Name your pizza..."
                                        id='name'
                                        type="text"
                                        name='name'
                                        value={formValues.name}
                                        onChange={changeHandler}
                                        onBlur={validateName}
                                        ref={nameRef} />
                                    {errors.name && (<p className="errorMessage">{errors.name}</p>)}
                                </div>
                                <div>
                                    <label className="heading_label" htmlFor="size">Size</label>
                                    <select className="form-control"
                                        id="size"
                                        name="size"
                                        value={formValues.size}
                                        onChange={changeHandler}
                                        onBlur={validateSize}>
                                        <option value="" disabled="" >Choose size?</option>
                                        <option value="Medium - 6 slices">Medium - 6 slices</option>
                                        <option value="Large - 8 slices">Large - 8 slices</option>
                                        <option value="Jumbo - 12 slices">Jumbo - 12 slices</option>
                                    </select>
                                    {errors.size && (<p className="errorMessage">{errors.size}</p>)}
                                </div>
                                <div style={{ marginBottom: '20px' }} onBlur={validateIngredients}>
                                    <h3>Choose Ingredients</h3>
                                    <div>
                                        <label style={{ marginRight: '5px' }} htmlFor="dough">dough</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="dough"
                                            id="dough"
                                            checked={formValues.dough}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="pepperoni">pepperoni</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="pepperoni"
                                            id="pepperoni"
                                            checked={formValues.pepperoni}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="smoked-ham">smoked-ham</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="smoked-ham"
                                            id="smoked-ham"
                                            checked={formValues['smoked-ham']}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="bacon">bacon</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="bacon"
                                            id="bacon"
                                            checked={formValues.bacon}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="chicken">chicken</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="chicken"
                                            id="chicken"
                                            checked={formValues.chicken}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="cheese">cheese</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="cheese"
                                            id="cheese"
                                            checked={formValues.cheese}
                                            onChange={changeHandler} />

                                    </div>
                                    <div>
                                        <label style={{ marginRight: '5px' }} htmlFor="mozzarella">mozzarella</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="mozzarella"
                                            id="mozzarella"
                                            checked={formValues.mozzarella}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="mushrooms">mushrooms</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="mushrooms"
                                            id="mushrooms"
                                            checked={formValues.mushrooms}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="olives">olives</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="olives"
                                            id="olives"
                                            checked={formValues.olives}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="peppers">peppers</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="peppers"
                                            id="peppers"
                                            checked={formValues.peppers}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="barbecue-sauce">barbecue-sauce</label>
                                        <input
                                            type="checkBox"
                                            name="barbecue-sauce"
                                            id="barbecue-sauce"
                                            checked={formValues['barbecue-sauce']}
                                            onChange={changeHandler} />
                                    </div>
                                    <div>
                                        <label style={{ marginRight: '5px' }} htmlFor="onions">onions</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="onions"
                                            id="onions"
                                            checked={formValues.onions}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="tomatoes">tomatoes</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="tomatoes"
                                            id="tomatoes"
                                            checked={formValues.tomatoes}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="pesto-sauce">pesto-sauce</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="pesto-sauce"
                                            id="pesto-sauce"
                                            checked={formValues['pesto-sauce']}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="cream">cream</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="cream"
                                            id="cream"
                                            checked={formValues.cream}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="basil">basil</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="basil"
                                            id="basil"
                                            checked={formValues.basil}
                                            onChange={changeHandler} />

                                    </div>
                                    {errors.ingredients && (<p className="errorMessage">{errors.ingredients}</p>)}
                                </div>

                                <div>
                                    <label className="heading_label" htmlFor="imageUrl">Add photo url</label>
                                    <input className="form-control" placeholder="Add image url (optional)"
                                        id="imageUrl"
                                        name="imageUrl"
                                        type="text"
                                        value={formValues.imageUrl}
                                        onChange={changeHandler}
                                        onBlur={validateImageUrl} />
                                    {errors.imageUrl && (<p className="errorMessage">{errors.imageUrl}</p>)}
                                </div>
                                <div >
                                    <label className="heading_label" htmlFor="description">Description</label>
                                    <textarea style={{ height: '100px' }} className="form-control" cols="70" rows="20" placeholder='Write short description or instructions on preparation'
                                        name="description"
                                        id="description"
                                        value={formValues.description}
                                        onChange={changeHandler}
                                        onBlur={validateDescription}></textarea>
                                    {errors.description && (<p className="errorMessage">{errors.description}</p>)}
                                </div>

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