import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

import useLocalStorage from "../hooks/useLocalStorage";
import * as userService from "../services/userService";
import Paths from "../constants/Paths";

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});   
    const navigate = useNavigate();
  
    const registerSubmitHandler = async (values) => {
        const result = await userService.Register(values.username, values.email, values.password);
        setAuth(result);
        navigate(Paths.Home);
    }


    const loginSubmitHandler = async (values) => {
        try {
            const result = await userService.Login(values);
            setAuth(result);
            navigate(Paths.Home);
        } catch (err) {
            console.log("Login failed:", err);     
            navigate(Paths.Register)        
        }

    }

    const logOutHandler = () => {
        setAuth({});
        navigate(Paths.Home);
    }

    const contextValues = {
        registerSubmitHandler,
        loginSubmitHandler,
        logOutHandler,
        userId: auth._id,
        email: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.accessToken,               
    }
    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;