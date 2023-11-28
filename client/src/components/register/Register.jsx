import { useContext, useState, useRef, useEffect } from 'react';

import AuthContext from '../../contexts/AuthContext';

import './Register.css';

const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: "confirm-password",
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const [formValues, setFormValues] = useState({
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    const [errors, setErrors] = useState({
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    const usernameRef = useRef();

    useEffect(() => {
        usernameRef.current.focus()
    }, []);

    const validateUsername = () => {
        if (formValues.username.length < 2 || formValues.username.length > 30) {
            setErrors(state => ({ ...state, [RegisterFormKeys.Username]: 'Username must be between 2 and 30 characters!' }))
        }
        else {
            setErrors(state => ({ ...state, [RegisterFormKeys.Username]: '' }))
        }
    };

    const validateEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = emailRegex.test(formValues.email);
        if (!isValidEmail) {
            setErrors(state => ({ ...state, [RegisterFormKeys.Email]: 'Email address is not valid!' }))
        } else {
            setErrors(state => ({ ...state, [RegisterFormKeys.Email]: '' }));
        }
    }

    const validatePassword = () => {
        if (formValues.password.length < 6) {
            setErrors(state => ({ ...state, [RegisterFormKeys.Password]: 'Password must be at least 6 characters!' }))
        } else {
            setErrors(state => ({ ...state, [RegisterFormKeys.Password]: '' }));
        }
    }

    const validateConfirmPassword = () => {
        if (formValues.password !== formValues[RegisterFormKeys.ConfirmPassword]) {
            setErrors(state => ({ ...state, [RegisterFormKeys.ConfirmPassword]: 'Passwords do not match!' }))
        } else {
            setErrors(state => ({ ...state, [RegisterFormKeys.ConfirmPassword]: '' }));
        }
    }

    const changeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };


    const registerHandler = (e) => {
        e.preventDefault();
        validateUsername();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
      
        if (errors.username != ''
            || errors.email != ''
            || errors.password != ''
            || errors[RegisterFormKeys.ConfirmPassword] != ''
            || Object.keys(formValues).some(key => formValues[key] === '')) {
           
            return;
        }
        try {
            console.log(formValues)
            registerSubmitHandler(formValues)
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <section className="register_section register_layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2 className="text-center mx-auto">Register</h2>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-lg-1">
                        <div className="form_container">
                            <form action="" className="register_form" onSubmit={registerHandler}>
                                <div >
                                    <label className="heading_label" htmlFor="username">Username</label>
                                    <input className="form-control" placeholder="Your username here..."
                                        id='username'
                                        type="text"
                                        name={RegisterFormKeys.Username}
                                        value={formValues.username}
                                        onChange={changeHandler}
                                        onBlur={validateUsername}
                                        ref={usernameRef} />
                                    {errors.username && (<p className="errorMessage">{errors.username}</p>)}
                                </div>

                                <div>
                                    <label className="heading_label" htmlFor="email">Email</label>
                                    <input className="form-control" placeholder="Add your email..."
                                        id="email"
                                        type="email"
                                        name={RegisterFormKeys.Email}
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
                                        name={RegisterFormKeys.Password}
                                        value={formValues.password}
                                        onChange={changeHandler}
                                        onBlur={validatePassword} />
                                    {errors.password && (<p className="errorMessage">{errors.password}</p>)}
                                </div>
                                <div >
                                    <label className="heading_label" htmlFor="confirm-password">Confirm Password</label>
                                    <input className="form-control" placeholder="Repeat your password..."
                                        id="confirm-password"
                                        type="password"
                                        name={RegisterFormKeys.ConfirmPassword}
                                        value={formValues["confirm-password"]}
                                        onChange={changeHandler}
                                        onBlur={validateConfirmPassword} />
                                    {errors[RegisterFormKeys.ConfirmPassword] && (<p className="errorMessage">{errors[RegisterFormKeys.ConfirmPassword]}</p>)}
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