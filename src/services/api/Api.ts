import axios from "axios"

export const Api = axios.create({
  baseURL: 'https://api.mercadolibre.com/sites/MLB/search?q='
}) 