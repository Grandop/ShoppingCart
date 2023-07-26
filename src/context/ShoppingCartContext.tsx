import { createContext, useState } from 'react';
import { ProductsInterface } from '../interfaces/ProductsInterface';

interface ChildrenProps {
  children: React.ReactNode;
}

export interface ShoppingCartData {
  products: ProductsInterface[] | undefined;
  setProducts: React.Dispatch<React.SetStateAction<ProductsInterface[] | undefined>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  productSelected: ProductsInterface[] | undefined;
  setProductSelected: React.Dispatch<React.SetStateAction<ProductsInterface[] | undefined>>;
  modalIsHidden: boolean;
  setModalIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShoppingCartContext = createContext<ShoppingCartData>(
  {} as ShoppingCartData);

export const ShoppingCartContextProvider = ({ children }: ChildrenProps) => {
  const [products, setProducts] = useState<ProductsInterface[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [productSelected, setProductSelected] =  useState<ProductsInterface[] | undefined>([]);
  const [modalIsHidden, setModalIsHidden] = useState(true);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    productSelected,
    setProductSelected,
    modalIsHidden,
    setModalIsHidden
  }

  return (
    <ShoppingCartContext.Provider value={ value }>
      {children}
    </ShoppingCartContext.Provider>
  );
}