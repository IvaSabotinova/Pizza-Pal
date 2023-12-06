import * as libRequest from '../lib/request';

const base_Url = `http://localhost:4000/data/products`;

export const getAll = async () => {
    const result = await libRequest.get(base_Url);
    return result;
}

export const createProduct = async (productData) =>{
    const result = await libRequest.post(base_Url, productData);
    return result;
}

export const getProductById = async (productId) => {
    const result = await libRequest.get(`${base_Url}/${productId}`);
    console.log(result)
    return result;
}

export const updateProduct = async (productId, productData) => {
    const result = await libRequest.patch(`${base_Url}/${productId}`, productData);
    return result;
}