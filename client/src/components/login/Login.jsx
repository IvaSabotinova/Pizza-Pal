import { Link } from 'react-router-dom';

import './Login.css'

import Paths from '../../constants/Paths';

export default function Login() {

  return (
    <section className="login_section login_layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2 className="text-center mx-auto">Login</h2>
        </div>
        <div className="row">
          <div className="col-md-8 offset-lg-1">
            <div className="form_container">
              <form action="" className="login_form">
                <div>
                  <label className="heading_label" htmlFor="email">Email</label>
                  <input className="form-control" placeholder="Your email..."
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

                <div className="btn_box offset-4">
                  <button>Submit</button>
                </div>
                <p className="field">
                  <span>If you don't have profile click <Link className='register-link' to={Paths.Register}>here</Link></span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}