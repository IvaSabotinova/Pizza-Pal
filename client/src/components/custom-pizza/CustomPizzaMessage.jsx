import './CustomPizzaMessage.css';

export default function CustomPizzaMessage() {


    return (<section className="custom-pizza_section layout_padding">
        <div className="container  ">
            <div className="row">
                <div className="col-md-6 ">
                    <div className="img-box">
                        <img src="images/pizzas/custom-pizza.png" alt="custom-pizza" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="detail-box">
                        <div className="heading_container">
                            <h2>Welcome to Pizza Pal and create your own pizza!</h2>
                        </div>
                        <p>
                            At Pizza Pal, we believe in giving you the power to create the pizza of your dreams.
                            Explore our suggested menu or unleash your creativity by customizing your pizza from scratch.
                        </p>
                        <p>
                            Choose your favorite dough, select from a variety of fresh ingredients, add mouth-watering toppings,
                            and experience the joy of enjoying a pizza made just for you. Whether you're a classic Margherita lover
                            or an adventurous toppings explorer, Pizza Pal is here to satisfy your pizza cravings.
                        </p>
                        <p>
                            Dive into the world of flavors and possibilities – start building your custom pizza today!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section >);
}