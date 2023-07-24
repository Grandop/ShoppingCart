export interface ProductsInterface {
  id: string
  title: string
  condition: string
  thumbnail_id: string
  listing_type_id: string
  thumbnail: string
  currency_id: string
  price: number
  sold_quantity: number
  available_quantity: number
}

export interface ProdcutsResults {
  results: ProductsInterface[] | undefined;
}