import { useState } from 'react';


import './ProductCreate.css';

export default function ProductCreate() {
    const [productType, setProductType] = useState('');

    const handleTypeChange = (e) => {
        setProductType(e.target.value);
    };


    return (
        <section className="create-product_section product_layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2 className="text-center mx-auto">Create New Product</h2>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-lg-1">
                        <div className="form_container">
                            <form action="" className="create-product_form">
                                <div >
                                    <label className="heading_label" htmlFor="name">Name</label>
                                    <input className="form-control" placeholder="Name your product..."
                                        id='name'
                                        type="text"
                                        name='name'
                                    //  value={formValues.name}
                                    //  onChange={changeHandler}
                                    //  onBlur={validateName}
                                    //  ref={nameRef} 
                                    />
                                    {/* {errors.name && (<p className="errorMessage">{errors.name}</p>)} */}
                                </div>
                                <div>
                                    <label className="heading_label" htmlFor="type">Type</label>
                                    <select className="form-control"
                                        id="type"
                                        name="type"
                                        //   value={formValues.size}
                                        //  onChange={changeHandler}
                                        // onBlur={validateSize}
                                        onChange={handleTypeChange}
                                    >
                                        <option value="" disabled="" >Choose type?</option>
                                        <option value="pizza">Pizza</option>
                                        <option value="starter">Starter</option>
                                        <option value="dessert">Dessert</option>
                                        <option value="drink">Drink</option>
                                    </select>
                                    {/* {errors.size && (<p className="errorMessage">{errors.size}</p>)} */}
                                </div>
                                {productType !== 'drink' &&
                                    <div >
                                        <label className="heading_label" htmlFor="ingredients">Ingredients:</label>
                                        <input className="form-control" placeholder="Write ingredients..."
                                            id='ingredients'
                                            type="text"
                                            name='ingredients'
                                        //  value={formValues.name}
                                        //  onChange={changeHandler}
                                        //  onBlur={validateName}
                                        //  ref={nameRef} 
                                        />
                                        {/* {errors.name && (<p className="errorMessage">{errors.name}</p>)} */}
                                    </div>}
                                <div>
                                    <label className="heading_label" htmlFor="imageUrl">Add photo url</label>
                                    <input className="form-control" placeholder="Add image url"
                                        id="imageUrl"
                                        name="imageUrl"
                                        type="text"
                                    //  value={formValues.imageUrl}
                                    //   onChange={changeHandler}
                                    //  onBlur={validateImageUrl} 
                                    />
                                    {/* {errors.imageUrl && (<p className="errorMessage">{errors.imageUrl}</p>)} */}
                                </div>
                                {productType === 'pizza' &&
                                    <div>
                                        <p className="heading_label">Price per size</p>
                                        <div className='pizza-sizes'>
                                            <div className='pizza-size-01'>
                                                <label htmlFor="price-01">Medium - 6 slices</label>
                                                <input id="price-01" type="number" name="price-01" />
                                            </div>
                                            <div className='pizza-size-02'>
                                                <label htmlFor="price-02">Large - 8 slices</label>
                                                <input id="price-02" type="number" name="price-02" />
                                            </div>
                                            <div className='pizza-size-03'>
                                                <label htmlFor="price-03">Jumbo - 12 slices</label>
                                                <input id="price-03" type="number" name="price-03" />
                                            </div>
                                        </div>
                                        {/* <select className="form-control"
                                            id="size"
                                            name="size"
                                            value={formValues.size}
                                            onChange={changeHandler}
                                            onBlur={validateSize}
                                        >
                                            <option value="" disabled="" >Choose pizza size?</option>
                                            <option value="Medium - 6 slices">Medium - 6 slices</option>
                                            <option value="Large - 8 slices">Large - 8 slices</option>
                                            <option value="Jumbo - 12 slices">Jumbo - 12 slices</option>
                                        </select> */}
                                        {/* {errors.size && (<p className="errorMessage">{errors.size}</p>)} */}
                                    </div>}
                                {(productType !== 'pizza' || productType === '') &&
                                    <div >
                                        <label className="heading_label" htmlFor="price">Price</label>
                                        <input className="form-control" placeholder="Write product price..."
                                            id='price'
                                            type="number"
                                            name='price'
                                        //  value={formValues.name}
                                        //  onChange={changeHandler}
                                        //  onBlur={validateName}
                                        //  ref={nameRef} 
                                        />
                                        {/* {errors.name && (<p className="errorMessage">{errors.name}</p>)} */}
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





