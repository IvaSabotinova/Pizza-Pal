export default function Offer() {
  return (<section className="offer_section layout_padding-bottom">
    <div className="offer_container">
      <div className="container ">
        <div className="row">
          <div className="col-md-6  ">
            <div className="box ">
              <div className="img-box">
                <img src="images/offers/offer01.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="detail-box">
                <h5>Tasty Thursdays</h5>
                <h6>                 
                  Large pizza + chicken starter + 2xCoca-Cola 500ml only for 23.50 BGN!
                </h6>
                <p style={{color: "#ffbe33", fontFamily: "'Dancing Script', cursive", fontSize: "28px"}}>
                  Weekly Offer              
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6  ">
            <div className="box ">
              <div className="img-box">
                <img src="images/offers/offer02.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="detail-box">
                <h5>Pizza Days</h5>
                <h6>                 
                  Get two medium pizzas + two Nirvana ice-cream only for 29.40 BGN.
                </h6>
                <p style={{color: "#ffbe33", fontFamily: "'Dancing Script', cursive", fontSize: "28px"}}>
                  Weekly Offer              
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
}