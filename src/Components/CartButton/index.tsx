import * as S from './styles';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

function CartButton() {

  const { productSelected, modalIsHidden, setModalIsHidden } = useContext(ShoppingCartContext)

  return ( 
    <S.CartButton onClick={() => setModalIsHidden(!modalIsHidden)}>
      <AiOutlineShoppingCart/>
      {
        productSelected!.length > 0 &&
        <S.CartCount>{productSelected?.length}</S.CartCount>
      }
    </S.CartButton>
  );
}

export default CartButton;