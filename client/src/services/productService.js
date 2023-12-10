import * as libRequest from '../lib/request';

import { BaseUrl } from '../constants/Paths';

const base_Url = `${BaseUrl}/data/products`;

export const getLatestThree = async () => {
    const result = await libRequest.get(`${base_Url}?sortBy=_createdOn desc&offset=0&pageSize=3`);
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