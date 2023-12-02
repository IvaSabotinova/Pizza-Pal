import * as libRequest from '../lib/request'

const base_Url = `http://localhost:4000/data/custom-pizzas`;

export const createCustomPizza = async (pizzaData) => {
    const result = await libRequest.post(base_Url, pizzaData);
    return result;
}

export const getAll = async () => {
    const result = await libRequest.get(base_Url);
    const data = result;
    return data;
}

export const getAllByOwnerId = async (ownerId) =>{
    const query = new URLSearchParams({
        where: `_ownerId="${ownerId}"`,
        //load: `creator=_ownerId:users`
    });
    const result = await libRequest.get(`${base_Url}?${query}`);
    console.log(result);
    return result;
}


export const getPizzaDetails = async (pizzaId) => {
    const query = new URLSearchParams({
        where: `_id="${pizzaId}"`,
        load: `creator=_ownerId:users`
    });
    //   const result = await libRequest.get(`${base_Url}/${pizzaId}`);
    const result = await libRequest.get(`${base_Url}?${query}`)
  //  console.log(result[0])
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
