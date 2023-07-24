import { Api } from './api/Api';

const getProducts = async (item: string) => {
  const endpoint: string = item;

  try {
    const response = await Api.get(endpoint);
    return response.data.results;
  } catch (err) {
    throw new Error('request failed')
  }
}

export const fetchProducts = { getProducts };