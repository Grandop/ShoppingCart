import { BsFillCartPlusFill } from 'react-icons/bs';
import * as S from './styles';
import { ProductsInterface } from '../../interfaces/ProductsInterface';
import formatCurrency from '../../utils/formatPrice';


function ProductCard({ title, price, thumbnail }: ProductsInterface) {
  const thumbnailFormated = thumbnail.replace(/\w\.jpg/gi, 'W.jpg')

  return ( 
    <S.Container>
      
      <S.CardImage 
        src={thumbnailFormated}
        alt='produto'
      />

      <S.CardInfo>
        <S.CardPrice>{formatCurrency(price, 'BRl')}</S.CardPrice>
        <S.CardTitle>{title}</S.CardTitle>
      </S.CardInfo>

      <S.ButtonAddCard>
        <BsFillCartPlusFill/>
      </S.ButtonAddCard>

    </S.Container>
  );
}

export default ProductCard;