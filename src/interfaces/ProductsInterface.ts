export interface ProductsInterface {
  id: string
  title: string
  thumbnail: string
  price: number
}

export interface ProdcutsResults {
  results: ProductsInterface[] | undefined;
}