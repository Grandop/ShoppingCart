import {useContext} from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import * as S from './styles';
import { ProductsInterface } from '../../interfaces/ProductsInterface';
import formatCurrency from '../../utils/formatPrice';
import formatImage from '../../utils/formatImage';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

function ProductCard(data: ProductsInterface) {
  const { productSelected, setProductSelected } = useContext(ShoppingCartContext);

  const handleAddProduct = () => {
    const updatedProductSelected = productSelected || [];
    setProductSelected([...updatedProductSelected, data ]);
  }

  return ( 
    <S.Container>
      
      <S.CardImage 
        src={formatImage(data.thumbnail)}
        alt='produto'
      />

      <S.CardInfo>
        <S.CardPrice>{formatCurrency(data.price, 'BRL')}</S.CardPrice>
        <S.CardTitle>{data.title}</S.CardTitle>
      </S.CardInfo>

      <S.ButtonAddCard onClick={() => handleAddProduct()} >
        <BsFillCartPlusFill/>
      </S.ButtonAddCard>

    </S.Container>
  );
}

export default ProductCard;