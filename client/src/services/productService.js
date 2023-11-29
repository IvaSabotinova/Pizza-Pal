import * as libRequest from '../lib/request';

const base_Url = `http://localhost:4000/data/products`;

export const getAll = async () => {
    const result = await libRequest.get(base_Url);
    return result;
}

