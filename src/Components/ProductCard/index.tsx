import { BsFillCartPlusFill } from 'react-icons/bs';
import * as S from './styles';

function ProductCard() {
  return ( 
    <S.Container>
      
      <S.CardImage 
        src="http://http2.mlstatic.com/D_809326-MLA46115014340_052021-W.jpg" 
        alt='produto'
      />

      <S.CardInfo>
        <S.CardPrice>R$ 200</S.CardPrice>
        <S.CardTitle>Produto</S.CardTitle>
      </S.CardInfo>

      <S.ButtonAddCard>
        <BsFillCartPlusFill/>
      </S.ButtonAddCard>

    </S.Container>
  );
}

export default ProductCard;