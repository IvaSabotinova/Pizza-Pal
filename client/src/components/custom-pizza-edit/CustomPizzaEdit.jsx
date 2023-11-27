import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './CustomPizzaEdit.css'

import * as customPizzaService from '../../services/customPizzaService';
import Paths from '../../constants/Paths';
import { pathToUrl } from '../../utils/pathUtil';

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
export default function CustomPizzaEdit() {
    const { pizzaId } = useParams();
    const navigate = useNavigate();
    const [pizza, setPizza] = useState(formInitialState);
    const [errors, setErrors] = useState(errorsInitialState);
    const nameRef = useRef();

    useEffect(() => {
        customPizzaService.getPizzaDetails(pizzaId)
            .then((result) => {
                setInitialFormData(result);
            })
    }, []);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const setInitialFormData = (pizzaData) => {
        setPizza({
            ...pizzaData,
            ingredients: '',
        });
    };

    const validateName = () => {
        if (pizza.name.length < 2 || pizza.name.length > 30) {
            setErrors(state => ({ ...state, name: 'Name must be between 2 and 30 characters!' }));
        } else {
            setErrors(state => ({ ...state, name: '' }));
        }
    };

    const validateSize = () => {
        if (!pizza.size) {
            setErrors(state => ({ ...state, size: 'Please choose a size!' }));
        } else {
            setErrors(state => ({ ...state, size: '' }));
        }
    };

    const validateIngredients = () => {
        const atLeastOneChecked = Object.values(pizza)
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
        const isValidImageUrl = imageUrlRegex.test(pizza.imageUrl);

        if (pizza.imageUrl && !isValidImageUrl) {
            setErrors(state => ({ ...state, imageUrl: 'Invalid image url!' }))
        } else {
            setErrors(state => ({ ...state, imageUrl: '' }))
        }
    };

    const validateDescription = () => {
        if (pizza.description.length < 10 || pizza.description.length > 1000) {
            setErrors(state => ({ ...state, description: 'Description must be between 10 and 1000 characters.' }));
        } else {
            setErrors(state => ({ ...state, description: '' }));
        }
    };

    const changeHandler = (e) => {
        let value = '';
        switch (e.target.type) {
            case 'checkbox': value = e.target.checked; break;
            default: value = e.target.value; break
        }
        setPizza(state => ({ ...state, [e.target.name]: value }));
    }
    const editPizzaHandler = async (e) => {
        e.preventDefault();
        validateName();
        validateSize();
        validateIngredients();
        validateImageUrl();
        validateDescription();

        const newIngredientsString = Object.entries(pizza)
            .filter(([property, value]) => value === true)
            .map(([property]) => property)
            .join(', ');

        pizza.ingredients = newIngredientsString;

        if (errors.name != ''
            || errors.size != ''
            || errors.ingredients != ''
            || errors.imageUrl != ''
            || errors.description != ''
            || Object.keys(pizza).some(key => key !== 'imageUrl' && pizza[key] === '')) {

            return;
        }
        try {
            const editedPizza = await customPizzaService.editPizzaById(pizzaId, pizza);
            console.log(editedPizza);
            navigate(pathToUrl(Paths.CustomPizzaDetails, { pizzaId }));

        } catch (err) {
            //Error notification
            console.log(err);
        }
    }


    return (
        <section className="edit-pizza_section pizza_layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2 className="text-center mx-auto">Edit Your Pizza {pizza.name}</h2>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-lg-1">
                        <div className="form_container">
                            <form action="" className="edit-pizza_form" onSubmit={editPizzaHandler}>
                                <div >
                                    <label className="heading_label" htmlFor="name">Name</label>
                                    <input className="form-control" placeholder="Name your pizza..."
                                        id='name'
                                        type="text"
                                        name='name'
                                        value={pizza.name}
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
                                        value={pizza.size}
                                        onChange={changeHandler}
                                        onBlur={validateSize} >
                                        <option value="" disabled="" >Choose size?</option>
                                        <option value="Medium - 6 slices">Medium - 6 slices</option>
                                        <option value="Large - 8 slices">Large - 8 slices</option>
                                        <option value="Jumbo - 12 slices">Jumbo - 12 slices</option>
                                    </select>
                                    {errors.size && (<p className="errorMessage">{errors.size}</p>)}
                                </div>
                                <div style={{ marginBottom: '20px' }}
                                    onBlur={validateIngredients} >
                                    <h3>Choose Ingredients</h3>
                                    <div>
                                        <label style={{ marginRight: '5px' }} htmlFor="dough">dough</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="dough"
                                            id="dough"
                                            checked={pizza.dough}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="pepperoni">pepperoni</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="pepperoni"
                                            id="pepperoni"
                                            checked={pizza.pepperoni}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="smoked-ham">smoked-ham</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="smoked-ham"
                                            id="smoked-ham"
                                            checked={pizza['smoked-ham']}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="bacon">bacon</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="bacon"
                                            id="bacon"
                                            checked={pizza.bacon}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="chicken">chicken</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="chicken"
                                            id="chicken"
                                            checked={pizza.chicken}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="cheese">cheese</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="cheese"
                                            id="cheese"
                                            checked={pizza.cheese}
                                            onChange={changeHandler} />
                                    </div>
                                    <div>
                                        <label style={{ marginRight: '5px' }} htmlFor="mozzarella">mozzarella</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="mozzarella"
                                            id="mozzarella"
                                            checked={pizza.mozzarella}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="mushrooms">mushrooms</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="mushrooms"
                                            id="mushrooms"
                                            checked={pizza.mushrooms}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="olives">olives</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="olives"
                                            id="olives"
                                            checked={pizza.olives}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="peppers">peppers</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="peppers"
                                            id="peppers"
                                            checked={pizza.peppers}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="barbecue-sauce">barbecue-sauce</label>
                                        <input
                                            type="checkBox"
                                            name="barbecue-sauce"
                                            id="barbecue-sauce"
                                            checked={pizza['barbecue-sauce']}
                                            onChange={changeHandler} />
                                    </div>
                                    <div>
                                        <label style={{ marginRight: '5px' }} htmlFor="onions">onions</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="onions"
                                            id="onions"
                                            checked={pizza.onions}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="tomatoes">tomatoes</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="tomatoes"
                                            id="tomatoes"
                                            checked={pizza.tomatoes}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="pesto-sauce">pesto-sauce</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="pesto-sauce"
                                            id="pesto-sauce"
                                            checked={pizza['pesto-sauce']}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="cream">cream</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="cream"
                                            id="cream"
                                            checked={pizza.cream}
                                            onChange={changeHandler} />
                                        <label style={{ marginRight: '5px' }} htmlFor="basil">basil</label>
                                        <input style={{ marginRight: '20px' }}
                                            type="checkBox"
                                            name="basil"
                                            id="basil"
                                            checked={pizza.basil}
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
                                        value={pizza.imageUrl}
                                        onChange={changeHandler}
                                        onBlur={validateImageUrl} />
                                    {errors.imageUrl && (<p className="errorMessage">{errors.imageUrl}</p>)}
                                </div>
                                <div >
                                    <label className="heading_label" htmlFor="description">Description</label>
                                    <textarea style={{ height: '100px' }} className="form-control" cols="70" rows="20" placeholder='Write short description or instructions on preparation'
                                        name="description"
                                        id="description"
                                        value={pizza.description}
                                        onChange={changeHandler}
                                        onBlur={validateDescription}>
                                    </textarea>
                                    {errors.description && (<p className="errorMessage">{errors.description}</p>)}
                                </div>

                                <div className="btn_box offset-3">
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                    <div className="map_container ">
                        <div id="googleMap" />
                    </div>
                </div> */}
                </div>
            </div>
        </section>
    );

}
