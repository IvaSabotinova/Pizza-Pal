import { Link } from 'react-router-dom';

import './Login.css'

import Paths from '../../constants/Paths';
import AuthContext from '../../contexts/AuthContext';
import { useContext, useState } from 'react';

const LoginFormKeys = {
  Email: 'email',
  Password: 'password'
}

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
  });

  const [errors, setErrors] = useState({
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',

  });


  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(formValues.email);
    if (!isValidEmail) {
      setErrors(state => ({ ...state, [LoginFormKeys.Email]: 'Email address is not valid!' }))
    } else {
      setErrors(state => ({ ...state, [LoginFormKeys.Email]: '' }));
    }
  }

  const validatePassword = () => {
    if (formValues.password.length < 5) {
      setErrors(state => ({ ...state, [LoginFormKeys.Password]: 'Password must be at least 5 characters!' }))
    } else {
      setErrors(state => ({ ...state, [LoginFormKeys.Password]: '' }));
    }
  }

  const changeHandler = (e) => {
    setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
  }

  const loginHandler = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    if (errors.email != ''
      || errors.password != ''
      || Object.keys(formValues).some(key => formValues[key] === ''))
      {

      return;
    }
    try {
     console.log(formValues)
      loginSubmitHandler(formValues)
    } catch (err) {
      console.log(err)
    }


  }


  return (
    <section className="login_section login_layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2 className="text-center mx-auto">Login</h2>
        </div>
        <div className="row">
          <div className="col-md-8 offset-lg-1">
            <div className="form_container">
              <form action="" className="login_form" onSubmit={loginHandler}>
                <div>
                  <label className="heading_label" htmlFor="email">Email</label>
                  <input className="form-control" placeholder="Your email..."
                    id="email"
                    type="email"
                    name={LoginFormKeys.Email}
                    value={formValues.email}
                    onChange={changeHandler}
                    onBlur={validateEmail} />                 
                  {errors.email && (<p className="errorMessage">{errors.email}</p>)}
                </div>
                <div >
                  <label className="heading_label" htmlFor="password">Password</label>
                  <input className="form-control" placeholder="Enter password..."
                    id="password"
                    type="password"
                    name={LoginFormKeys.Password}
                    value={formValues.password}
                    onChange={changeHandler}
                    onBlur={validatePassword} />                  
                  {errors.password && (<p className="errorMessage">{errors.password}</p>)}            
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