export default function Footer() {
    return (<footer className="footer_section">
        <div className="container">
            <div className="row">
                <div className="col-md-4 footer-col">
                    <div className="footer_contact">
                        <h4>Contact Us</h4>
                        <div className="contact_link_box">
                            <a href="">
                                <i className="fa fa-map-marker" aria-hidden="true" />
                                <span>Location</span>
                            </a>
                            <a href="">
                                <i className="fa fa-phone" aria-hidden="true" />
                                <span>Call +01 1234567890</span>
                            </a>
                            <a href="">
                                <i className="fa fa-envelope" aria-hidden="true" />
                                <span>pizza-pal@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 footer-col">
                    <div className="footer_detail">
                        <a href="" className="footer-logo">
                            Pizza Pal Restaurant
                        </a>
                        <p>
                            We, at Pizza Pal, value our Customers, offering ONLY high quality foods!
                        </p>
                        <div className="footer_social">
                            <a href="">
                                <i className="fa fa-facebook" aria-hidden="true" />
                            </a>
                            <a href="">
                                <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                            <a href="">
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>
                            <a href="">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                            <a href="">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 footer-col">
                    <h4>Opening Hours</h4>
                    <p>Everyday</p>
                    <p>10.00 Am -10.00 Pm</p>
                </div>
            </div>
            <div className="footer-info">
                <p>
                    © <span id="displayYear" /> All Rights Reserved By
                    <a href="https://html.design/"> Pizza Pal Restaurant</a>
                    <br />
                    <br />
                    © <span id="displayYear" /> Distributed By
                    <a href="https://themewagon.com/" target="_blank"> Pizza Pal Restaurant
                    </a>
                </p>
            </div>
        </div>
    </footer>);
}