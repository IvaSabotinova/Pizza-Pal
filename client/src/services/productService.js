import * as libRequest from '../lib/request';

const base_Url = `http://localhost:4000/data/products`;

export const getAll = async () => {
    const result = await libRequest.get(base_Url);
    return result;
}

export const getAllByPage = async (type, number) => {
    let query;
    if (type !== '*') {
        query = new URLSearchParams({
            where: `type="${type}"`
        });
    }

    const result = await libRequest.get(`${base_Url}?${query ? `${query}&` : ''}offset=0&pageSize=${number}`);
    return result;
}

export const getProductsCountPerType = async (type) => {
    let query;
    if (type !== "*") {
        query = new URLSearchParams({
            where: `type="${type}"`
        });
    }
    const result = await libRequest.get(`${base_Url}?count${query ? `&${query}` : ''}`);
    return result;
}

export const createProduct = async (productData) => {
    const result = await libRequest.post(base_Url, productData);
    return result;
}

export const getProductById = async (productId) => {
    const result = await libRequest.get(`${base_Url}/${productId}`);
    return result;
}

export const updateProduct = async (productId, productData) => {
    const result = await libRequest.patch(`${base_Url}/${productId}`, productData);
    return result;
}

export const deleteProduct = async (productId) => {
    const result = await libRequest.remove(`${base_Url}/${productId}`);
    console.log(result)
    return result;
}