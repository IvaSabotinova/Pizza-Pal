import * as libRequest from '../lib/request';

import {BaseUrl} from '../constants/Paths';

const base_Url = `${BaseUrl}/users`;

export const Login = async (userData) => {
    const result = await libRequest.post(`${base_Url}/login`, userData);
    return result;
}

export const Register = (username, email, password) => {
    const result = libRequest.post(`${base_Url}/register`, {username, email, password});
    return result;
}

export const Logout = () => libRequest.get(`${base_Url}/logout`);