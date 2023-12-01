
// const base_Url = `http://localhost:4000/admin`;

// export const Login = async (adminData) => {
//     const httpHeaders = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(adminData)
//     }

//     const token = localStorage.getItem('accessToken');

//     if (token && adminData.email === 'admin@abv.bg') {
//         //    httpHeaders.headers['X-Authorization'] = token;
//         httpHeaders.headers['X-Admin'] = token;
//     }
//     console.log(httpHeaders)
//     const response = await fetch(`${base_Url}/login`, httpHeaders);
//     const result = await response.json();
//     console.log(result)
//     return result;
// }

// export const Register = (username, email, password) => {

//     const result = libRequest.post(`${base_Url}/register`, {username, email, password});
//     return result;
// }

//export const Logout = () => libRequest.get(`${base_Url}/logout`);

