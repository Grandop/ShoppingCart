import { useContext } from 'react';
import CartItem from '../CartItem';
import * as S from './styles';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import formatCurrency from '../../utils/formatPrice';

function Cart() {
  const { productSelected, modalIsHidden } = useContext(ShoppingCartContext);

  const totalPrice = productSelected?.reduce((acc, item) => {
    return item.price + acc;
  }, 0).toFixed(2)

  const totalPriceInt = parseInt(totalPrice!);

  return ( 
    <S.Cart anim={modalIsHidden}>
      {productSelected?.map((item) => <CartItem {...item} key={item.id}/>)}
      <S.CartResume>{formatCurrency(totalPriceInt, 'BRL')}</S.CartResume>
    </S.Cart> 
  );
}

export default Cart;