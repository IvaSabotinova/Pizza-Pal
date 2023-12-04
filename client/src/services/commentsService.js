import * as libRequest from '../lib/request';

const base_Url = `http://localhost:4000/data/comments`;

export const createComment = async (pizzaId, content) => {
    const result = await libRequest.post(base_Url, { pizzaId, content });
    return result;
}

export const getCommentsByPizzaId = async (pizzaId) => {
    const query = new URLSearchParams({
        where: `pizzaId="${pizzaId}"`,
        load: `creator=_ownerId:users`,
    });
    const result = await libRequest.get(`${base_Url}?${query}`);   
    return result;
}

export const getCommentById = async (commentId) =>{
    const result = await libRequest.get(`${base_Url}/${commentId}`);
    return result;
}

export const updateComment = async (commentId, comment) =>{
    const result = await libRequest.patch(`${base_Url}/${commentId}`, comment);    
    return result;
}

export const deleteComment = async (commentId) =>{
    const result = await libRequest.remove(`${base_Url}/${commentId}`);
    return result;
}