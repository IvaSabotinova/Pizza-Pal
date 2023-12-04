const buildOptions = (data) => {
    const options = {};
    if (data) {
        options.headers = {
            'content-type': 'application/json'
        }
        options.body = JSON.stringify(data);

    }

    // const token = localStorage.getItem('accessToken');

    // if (token) {
    //     options.headers = {
    //         ...options.headers,
    //         'X-Authorization': token
    //     }
    // }       

    const token = JSON.parse(localStorage.getItem('auth'))?.accessToken;

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    }

    if (JSON.parse(localStorage.getItem('auth'))?.email === 'admin@abv.bg') {
        options.headers = {
            ...options.headers,
            'X-Admin': ""
        }
    }
    return options;
}


const request = async (method, url, data) => {
    const response = await fetch(url, {
        method,
        ...buildOptions(data)
    })

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }
    return result;
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const remove = request.bind(null, 'DELETE');





