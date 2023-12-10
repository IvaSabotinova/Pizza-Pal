import * as libRequest from '../lib/request';

import {BaseUrl} from '../constants/Paths';

const base_Url = `${BaseUrl}/data/custom-pizzas`;

export const createCustomPizza = async (pizzaData) => {
    const result = await libRequest.post(base_Url, pizzaData);
    return result;
}

export const getAllDesc = async () => {
    const result = await libRequest.get(`${base_Url}?sortBy=_createdOn desc`);
    const data = result;
    return data;
}

export const getAllByOwnerIdDesc = async (ownerId) =>{
    const query = new URLSearchParams({
        where: `_ownerId="${ownerId}"`,       
    });
    
    const result = await libRequest.get(`${base_Url}?${query}&sortBy=_createdOn desc`);
    console.log(result);
    return result;
}


export const getPizzaDetails = async (pizzaId) => {
    const query = new URLSearchParams({
        where: `_id="${pizzaId}"`,
        load: `creator=_ownerId:users`
    });

    const result = await libRequest.get(`${base_Url}?${query}`);
    return result[0];
  
}

export const editPizzaById = async (pizzaId, pizzaData) => {
    const result = await libRequest.put(`${base_Url}/${pizzaId}`, pizzaData);
    return result;
}


export const deletePizza = async (pizzaId) => {
    const result = await libRequest.remove(`${base_Url}/${pizzaId}`);
    return result;
}
