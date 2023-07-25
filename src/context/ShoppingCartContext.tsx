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
}

export const ShoppingCartContext = createContext<ShoppingCartData>(
  {} as ShoppingCartData);

export const ShoppingCartContextProvider = ({ children }: ChildrenProps) => {
  const [products, setProducts] = useState<ProductsInterface[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const value = {
    products,
    setProducts,
    loading,
    setLoading
  }

  return (
    <ShoppingCartContext.Provider 
      value={ value }
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}