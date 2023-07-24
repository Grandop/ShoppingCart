import { BsFillCartPlusFill } from 'react-icons/bs';
import * as S from './styles';
import { ProductsInterface } from '../../interfaces/ProductsInterface';


function ProductCard({
  title,
  price,
  thumbnail
}: ProductsInterface) {

  return ( 
    <S.Container>
      
      <S.CardImage 
        src={thumbnail}
        alt='produto'
      />

      <S.CardInfo>
        <S.CardPrice>{price}</S.CardPrice>
        <S.CardTitle>{title}</S.CardTitle>
      </S.CardInfo>

      <S.ButtonAddCard>
        <BsFillCartPlusFill/>
      </S.ButtonAddCard>

    </S.Container>
  );
}

export default ProductCard;