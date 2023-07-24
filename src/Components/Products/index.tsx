import { useState, useEffect } from 'react';
import * as S from './styles';
import { fetchProducts } from '../../services/fetchProducts';
import ProductCard from '../ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts.getProducts('iphone')
    .then((response) => {
      setProducts(response);
      console.log(products);
    })
  })

  return ( 
    <S.Products>
      <ProductCard/>
    </S.Products> 
  );
}

export default Products;