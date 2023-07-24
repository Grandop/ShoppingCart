
import CartButton from '../CartButton';
import SearchBar from '../SearchBar';
import * as S from './styles';

function Header() {
  return (
    <S.StyledHeader>
      <S.Container>
        
        <SearchBar/>
        <CartButton/>

      </S.Container>
    </S.StyledHeader>
  )
}

export default Header;
