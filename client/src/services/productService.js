import * as libRequest from '../lib/request';

const base_Url = `http://localhost:4000/jsonstore/products`;

export const getAll = async () => {
    const result = await libRequest.get(base_Url);
    const data = Object.values(result);
    return data;
}

