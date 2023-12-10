import * as libRequest from '../lib/request';

//const base_Url = 'http://localhost:4000/users';

const base_Url = 'https://pizza-pal-act4.onrender.com/users';

export const Login = async (userData) => {
    const result = await libRequest.post(`${base_Url}/login`, userData);
    return result;
}

export const Register = (username, email, password) => {
    const result = libRequest.post(`${base_Url}/register`, {username, email, password});
    return result;
}

export const Logout = () => libRequest.get(`${base_Url}/logout`);