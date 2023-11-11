const base_Url = `http://localhost:3030/jsonstore/products`;

export const getAll = async () => {
    const response = await fetch(base_Url);
    const result = await response.json();
    const data = Object.values(result);
    return data;
}