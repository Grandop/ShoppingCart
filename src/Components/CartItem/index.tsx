import { useContext } from 'react';
import { ProductsInterface } from '../../interfaces/ProductsInterface';
import formatImage from '../../utils/formatImage';
import formatCurrency from '../../utils/formatPrice';
import * as S from './styles';
import { BsCartDashFill } from 'react-icons/bs';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

function CartItem({ title, price, thumbnail, id }: ProductsInterface) {
  const { productSelected, setProductSelected } = useContext(ShoppingCartContext)

  const handleRemoveProduct = () => {
    const updateProducts = productSelected?.filter((item) => item.id != id)
    setProductSelected(updateProducts);
  }

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
          onClick={() => handleRemoveProduct()}
          type='button'
        >
          <BsCartDashFill/>
        </S.ButtonRemoveItem>

      </S.CartItemContent>

    </S.Container>
  );
}

export default CartItem;