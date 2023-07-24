import { useState } from 'react';
import * as S from './styles';
import { BsSearch } from 'react-icons/bs';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <S.Form>
      <S.InputText
        value={searchValue}
        onChange={({target}) => setSearchValue(target.value)} 
        type='search' 
        placeholder='Buscar produtos'
        required
      />
      <S.SearchButton
        type='submit'
      >
        <BsSearch/>
      </S.SearchButton>
    </S.Form>
  )
}

export default SearchBar;





