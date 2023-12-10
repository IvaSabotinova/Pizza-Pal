import * as libRequest from '../lib/request'

//const base_Url = `http://localhost:4000/data/custom-pizzas`;

const base_Url = `https://pizza-pal-act4.onrender.com/data/custom-pizzas`;

export const createCustomPizza = async (pizzaData) => {
    const result = await libRequest.post(base_Url, pizzaData);
    return result;
}

export const getAllDesc = async () => {
    const result = await libRequest.get(`${base_Url}?sortBy=_createdOn desc`);
    const data = result;
    return data;
}

export const getAllByOwnerId = async (ownerId) =>{
    const query = new URLSearchParams({
        where: `_ownerId="${ownerId}"`,       
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
