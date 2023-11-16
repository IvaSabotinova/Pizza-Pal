import { useState } from "react";


export default function About() {
  const [isParaVisible, setParaVisible] = useState(false);


  const visualize = (e) => {
    e.preventDefault();
    setParaVisible(state => !state)
  };


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
            </p>
            <p>Thanks to the combination of food quality, high standard of service and added value such as entertainment and overall atmosphere, in Bulgaria the Pizza Pal brand is one of the strongest in its class and for 2 years in a row it has won the Favorite Brand award and for 5 years in a row it has won the award of the Association of Hoteliers and Restaurateurs in Bulgaria for "Most Successful Restaurant Chain".</p>
            {isParaVisible &&
              (<>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quod distinctio rem sequi adipisci illo ipsam molestiae illum. Recusandae beatae iure eum et illo officiis perferendis nisi totam deserunt magnam!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident sunt molestias alias optio earum reiciendis nam! Ex, harum ipsam assumenda asperiores soluta amet aut nihil magni esse accusantium? Laudantium.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur impedit similique eum facilis delectus ratione illo aliquid rem repellat ut ipsam cupiditate maiores, maxime doloremque ex autem ab error.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quam voluptates culpa! Porro quis aperiam quam officia et, iure maxime officiis vitae quasi nam consequatur quod molestias autem ab fugit!
                </p>
                <a href="" onClick={visualize}>Read Less</a>
              </>
              )}

            {!isParaVisible && (<a href="" onClick={visualize}>Read More</a>)}

          </div>
        </div>
      </div>
    </div>
  </section >);
}