import { useState, useEffect } from 'react';
import * as S from './styles';
import { fetchProducts } from '../../services/fetchProducts';
import ProductCard from '../ProductCard';
import { ProductsInterface } from '../../interfaces/ProductsInterface';
import Loader from '../Loader';

function Products() {
  const [products, setProducts] = useState<ProductsInterface[] | undefined>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts.getProducts('iphone')
    .then((response) => {
      setProducts(response);
      setLoading(false)
    })
  })

  if(loading) {
    return(
      <Loader/>
    );
  }

  return ( 
    <S.Products>
      {products?.map((item) => <ProductCard {...item} key={item.id}/>)}
    </S.Products> 
  );
}

export default Products;