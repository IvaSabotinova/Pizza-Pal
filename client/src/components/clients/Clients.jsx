import './Clients.css'

export default function Clients() {

    return (
        <section className="client_section layout_padding-bottom">
            <div className="container">
                <div className="heading_container heading_center psudo_white_primary mb_45">
                    <h2>What Say Our Customers</h2>
                </div>
                <div className="client-wrap row ">
                    {/* <div className="owl-carousel client_owl-carousel"> */}
                    <div className="item">
                        <div className="box">
                            <div className="detail-box">
                                <p>
                                    Pizza Pal is a slice of heaven! The ability to customize my own pizza is a game-changer. From choosing the dough to piling on my favorite toppings, every bite feels like a culinary masterpiece. All these make Pizza Pal my go-to pizza destination.
                                </p>
                                <div className="client_details">
                                    <h4>Joanna Mitchell</h4>
                                    <p>Regular client</p>
                                </div>
                            </div>
                            <div className="img-box">
                                <img src="images/client1.jpg" alt="" className="box-img" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                            <div className="detail-box">
                                <p>
                                    As a pizza enthusiast, Pizza Pal has stolen a pizza my heart! The menu suggestions are fantastic, but what sets them apart is the option to create your own pizza. The quality of ingredients and the burst of flavors are unmatched.
                                </p>
                                <div className="client_details">
                                    <h4>Mike Smith</h4>
                                    <p>Regular client</p>
                                </div>
                            </div>
                            <div className="img-box">
                                <img src="images/client2.jpg" alt="" className="box-img" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                            <div className="detail-box">
                                <p>
                                    Pizza Pal isn't just a restaurant; it's an experience. Being able to craft my own pizza is a delightful journey. The variety of dough, sauces, and toppings ensures there's a combination for every plate. Pizza Pal delivers perfection every time.
                                </p>
                                <div className="client_details">
                                    <h4>Tony Smith</h4>
                                    <p>Regular client</p>
                                </div>
                            </div>
                            <div className="img-box">
                                <img src="images/client3.jpg" alt="" className="box-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>);
}