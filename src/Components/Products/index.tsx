import { useEffect, useContext } from 'react';
import * as S from './styles';
import { fetchProducts } from '../../services/fetchProducts';
import ProductCard from '../ProductCard';
import Loader from '../Loader';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(ShoppingCartContext);

  useEffect(() => {
    fetchProducts.getProducts('headset')
    .then((response) => {
      setProducts(response);
      setLoading(false)
    })
  }, [setLoading, setProducts])

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