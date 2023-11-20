import * as libRequest from '../lib/request'

const base_Url = `http://localhost:4000/jsonstore/custom-pizzas`;

export const createCustomPizza = async (pizzaData) => {
    const result = await libRequest.post(base_Url, pizzaData);
    return result;

}