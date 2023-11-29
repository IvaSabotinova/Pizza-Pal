import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import AuthContext from "../../contexts/AuthContext";
import * as userService from '../../services/userService';
import Paths from "../../constants/Paths";


export default function Logout() {
    const { logOutHandler } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        userService.Logout()
            .then(() => logOutHandler())
            .catch(() => navigate(Paths.Home))
    }, []);
    
    return null;
}