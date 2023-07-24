import * as S from './styles';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function CartButton() {
  return ( 
    <S.CartButton>
      <AiOutlineShoppingCart/>
      <S.CartCount>1</S.CartCount>
    </S.CartButton>
  );
}

export default CartButton;