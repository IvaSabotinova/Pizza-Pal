export default function Footer() {
    return (<footer className="footer_section">
        <div className="container">
            <div className="row">
                <div className="col-md-4 footer-col">
                    <div className="footer_contact">
                        <h4>Contact Us</h4>
                        <div className="contact_link_box">                         
                            <span >
                                <i className="fa fa-map-marker" aria-hidden="true" />
                                <span>Location</span>
                            </span>
                            <span >
                                <i className="fa fa-phone" aria-hidden="true" />
                                <span>Call +01 1234567890</span>
                            </span>
                            <span >
                                <i className="fa fa-envelope" aria-hidden="true" />
                                <span>pizza-pal@gmail.com</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 footer-col">
                    <div className="footer_detail">
                        <span className="footer-logo">
                            Pizza Pal Restaurant
                        </span>
                        <p>
                            We, at Pizza Pal, value our Customers, offering ONLY high quality foods!
                        </p>
                        <div className="footer_social">
                            <a href="https://github.com/IvaSabotinova/Pizza-Pal">
                                <i className="fa fa-facebook" aria-hidden="true" />
                            </a>
                            <a href="https://github.com/IvaSabotinova/Pizza-Pal">
                                <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                            <a href="https://github.com/IvaSabotinova/Pizza-Pal">
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>
                            <a href="https://github.com/IvaSabotinova/Pizza-Pal">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                            <a href="https://github.com/IvaSabotinova/Pizza-Pal">
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
                    © <span id="displayYear"> </span>All Rights Reserved By
                    <span> Pizza Pal Restaurant</span>
                    <br />
                    <br />
                    © <span id="displayYear"> </span>Distributed By
                    <span target="_blank"> Pizza Pal Restaurant
                    </span>
                </p>
            </div>
        </div>
    </footer>);
}