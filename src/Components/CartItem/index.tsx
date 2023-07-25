import { ProductsInterface } from '../../interfaces/ProductsInterface';
import formatImage from '../../utils/formatImage';
import formatCurrency from '../../utils/formatPrice';
import * as S from './styles';
import { BsCartDashFill } from 'react-icons/bs';

function CartItem({ title, price, thumbnail }: ProductsInterface) {
  return ( 
    <S.Container>
      <S.ProductImage
        src={formatImage(thumbnail)}
        alt='imagem do produto'
      />

      <S.CartItemContent>
        <S.ProductTitle>{title}</S.ProductTitle>
        <S.ProductPrice>{formatCurrency(price, 'BRL')}</S.ProductPrice>

        <S.ButtonRemoveItem
          type='button'
        >
          <BsCartDashFill/>
        </S.ButtonRemoveItem>

      </S.CartItemContent>

    </S.Container>
  );
}

export default CartItem;