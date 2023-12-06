import { useEffect, useState } from 'react';
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

export default function ProductEdit() {
    const { productId } = useParams();
    const [product, setProduct] = useState(formInitialValues);
    const navigate = useNavigate();

    useEffect(() => {
        productService.getProductById(productId)
            .then(setInitialProductData)
            .catch((err) => console.log(err))

    }, [productId]);

    const setInitialProductData = (productData) => {
        if (productData.type === 'pizza') {
            setProduct({
                ...productData,
                "Medium - 6 slices": productData.price["Medium - 6 slices"],
                "Large - 8 slices": productData.price["Large - 8 slices"],
                "Jumbo - 12 slices": productData.price["Jumbo - 12 slices"]

            })
        } else {
            setProduct({
                ...productData,
                price: productData.price.default
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
console.log(productToEdit)
        try {
            const editedProduct = await productService.updateProduct(productId, productToEdit);
            console.log(editedProduct)
            navigate(pathToUrl(Paths.ProductDetails, { productId }));
        } catch (err) {
            console.log(err)
        }

    }


    return (
        <section className="create-product_section product_layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2 className="text-center mx-auto">Edit Product</h2>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-lg-1">
                        <div className="form_container">
                            <form action="" className="create-product_form" onSubmit={editProductHandler}>
                                <div >
                                    <label className="heading_label" htmlFor="name">Name</label>
                                    <input className="form-control" placeholder="Name your product..."
                                        id='name'
                                        type="text"
                                        name='name'
                                        value={product.name}
                                        onChange={changeHandler}
                                    // onBlur={validateName}
                                    // ref={nameRef}
                                    />
                                    {/* {errors.name && (<p className="errorMessage">{errors.name}</p>)} */}
                                </div>
                                <div>
                                    <label className="heading_label" htmlFor="type">Type</label>
                                    <select className="form-control"
                                        id="type"
                                        name="type"
                                        value={product.type}
                                        onChange={changeHandler}
                                    //  onBlur={validateType}
                                    >
                                        <option value="" disabled="" >Choose type?</option>
                                        <option value="pizza">Pizza</option>
                                        <option value="starter">Starter</option>
                                        <option value="dessert">Dessert</option>
                                        <option value="drink">Drink</option>
                                    </select>
                                    {/* {errors.type && (<p className="errorMessage">{errors.type}</p>)} */}
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
                                        //  onBlur={validateIngredients}

                                        />
                                        {/* {errors.ingredients && (<p className="errorMessage">{errors.ingredients}</p>)} */}
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
                                    //   onBlur={validateImageUrl}
                                    />
                                    {/* {errors.imageUrl && (<p className="errorMessage">{errors.imageUrl}</p>)} */}
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
                                                //    onBlur={validatePrice} 
                                                />
                                            </div>
                                            <div className='pizza-size-02'>
                                                <label htmlFor="Large - 8 slices">Large - 8 slices</label>
                                                <input id="Large - 8 slices"
                                                    type="number"
                                                    name="Large - 8 slices"
                                                    value={product["Large - 8 slices"]}
                                                    onChange={changeHandler}
                                                //    onBlur={validatePrice} 
                                                />
                                            </div>
                                            <div className='pizza-size-03'>
                                                <label htmlFor="Jumbo - 12 slices">Jumbo - 12 slices</label>
                                                <input id="Jumbo - 12 slices"
                                                    type="number"
                                                    name="Jumbo - 12 slices"
                                                    value={product["Jumbo - 12 slices"]}
                                                    onChange={changeHandler}
                                                //  onBlur={validatePrice} 
                                                />
                                            </div>
                                        </div>
                                        {/* {errors.price && (<p className="errorMessage">{errors.price}</p>)} */}
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
                                        //   onBlur={validatePrice}
                                        />
                                        {/* {errors.price && (<p className="errorMessage">{errors.price}</p>)} */}
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