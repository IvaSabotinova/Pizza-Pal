import './Register.css';

export default function Register() {
  
  return ( 
  <section className="register_section register_layout_padding">
  <div className="container">
      <div className="heading_container">
          <h2 className="text-center mx-auto">Register</h2>
      </div>
      <div className="row">
          <div className="col-md-8 offset-lg-1">
              <div className="form_container">
                  <form action="" className="register_form">
                      <div >
                          <label className="heading_label" htmlFor="name">Name</label>
                          <input className="form-control" placeholder="Your name here..."
                              id='name'
                              type="text"
                              name='name'
                              //value='name'
                               />
                          {/* {errors.name && (<p className="errorMessage">{errors.name}</p>)} */}
                      </div>                

                      <div>
                          <label className="heading_label" htmlFor="email">Email</label>
                          <input className="form-control" placeholder="Add your email..."
                              id="email"
                              name="email"
                              type="email"
                              //value='email'
                              />
                          {/* {errors.imageUrl && (<p className="errorMessage">{errors.imageUrl}</p>)} */}
                      </div>
                      <div >
                          <label className="heading_label" htmlFor="password">Password</label>
                          <input className="form-control" placeholder="Enter password..."
                              id="password"
                              name="password"
                              type="password"
                             // value='password'
                             />
                          {/* {errors.description && (<p className="errorMessage">{errors.description}</p>)} */}
                      </div>
                      <div >
                          <label className="heading_label" htmlFor="confirm-password">Confirm Password</label>
                          <input className="form-control" placeholder="Repeat your password..."
                              id="confirm-password"
                              name="password"
                              type="password"
                              //value='confirm-password'
                              />
                          {/* {errors.description && (<p className="errorMessage">{errors.description}</p>)} */}
                      </div>

                      <div className="btn_box offset-4">
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