export default function About() {
  return (<section className="about_section layout_padding">
    <div className="container  ">
      <div className="row">
        <div className="col-md-6 ">
          <div className="img-box">
            <img src="images/about.png" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>We Are Pizza Pal Restaurant</h2>
            </div>
            <p>
              Pizza Pal Restaurant is a chain of casual restaurants, with a 8-year history, and to date there are already 9 Pizza Pal restaurants in major cities and the national road network in the country, with enforced standards of service and interior.
              <br />
              Thanks to the combination of food quality, high standard of service and added value such as entertainment and overall atmosphere, in Bulgaria the Pizza Pal brand is one of the strongest in its class and for 2 years in a row it has won the Favorite Brand award and for 5 years in a row it has won the award of the Association of Hoteliers and Restaurateurs in Bulgaria for "Most Successful Restaurant Chain".
            </p>
            <a href="">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>);
}