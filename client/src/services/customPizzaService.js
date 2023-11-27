import * as libRequest from '../lib/request'

const base_Url = `http://localhost:4000/jsonstore/custom-pizzas`;

export const createCustomPizza = async (pizzaData) => {
    const result = await libRequest.post(base_Url, pizzaData);
    return result;
}

export const getAll = async () => {
    const result = await libRequest.get(base_Url);
    const data = Object.values(result);
    return data;
}


export const getPizzaDetails = async (pizzaId) =>{
    const result = await libRequest.get(`${base_Url}/${pizzaId}`);
    console.log(result)
    return result;
}

export const editPizzaById = async (pizzaId, pizzaData) =>{
    const result = await libRequest.put(`${base_Url}/${pizzaId}`, pizzaData);
    return result;
}


export const deletePizza = async (pizzaId) =>{

    const result = await libRequest.remove(`${base_Url}/${pizzaId}`);
    return result;
}
