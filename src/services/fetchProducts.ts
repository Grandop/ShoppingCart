import { ProdcutsResults, ProductsInterface } from '../interfaces/ProductsInterface';
import { Api } from './api/Api';

const getProducts = async (item: string): Promise<ProductsInterface[] | undefined> => {
  const endpoint: string = item;

  try {
    const response = await Api.get<ProdcutsResults>(endpoint);
    return response.data.results;
  } catch (err) {
    throw new Error('request failed')
  }
}

export const fetchProducts = { getProducts };