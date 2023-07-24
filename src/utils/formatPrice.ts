const formatCurrency = (price: number, currencyType: string): string => {
  return price.toLocaleString('pt-br', {
    currency: currencyType,
    style: 'currency'
  })
}

export default formatCurrency;