import { useContext } from 'react';
import CartItem from '../CartItem';
import * as S from './styles';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

function Cart() {
  const { productSelected } = useContext(ShoppingCartContext);

  const totalPrice = productSelected?.reduce((acc, item) => {
    return item.price + acc;
  }, 0)

  return ( 
    <S.Cart>
      {productSelected?.map((item) => <CartItem {...item} key={item.id}/>)}
      <S.CartResume>{totalPrice?.toFixed(2)}</S.CartResume>
    </S.Cart> 
  );
}

export default Cart;