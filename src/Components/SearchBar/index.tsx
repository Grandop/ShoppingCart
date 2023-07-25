import { useState, useContext } from 'react';
import * as S from './styles';
import { BsSearch } from 'react-icons/bs';
import { fetchProducts } from '../../services/fetchProducts';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const { setProducts, setLoading } = useContext(ShoppingCartContext)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    const products = await fetchProducts.getProducts(searchValue);
    setProducts(products);
    setLoading(false);
  };

  return (
    <S.Form onSubmit={(e) => handleSearch(e)}>
      <S.InputText
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)} 
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





