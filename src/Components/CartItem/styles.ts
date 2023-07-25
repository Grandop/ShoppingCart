import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  margin-bottom: 20px;
  position: relative;
`;

export const ProductImage = styled.img`
  width: 70px;
`;

export const CartItemContent = styled.div`
  padding: 0 35px 0 10px;
`;

export const ProductTitle = styled.h3`
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #000;
  opacity: 0.5;
  margin-bottom: 8px;
`;

export const ProductPrice = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  font-weight: 500;
`;

export const ButtonRemoveItem = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color: #d83232;
  font-size: 22px;
  border: none;
  background: none;
  margin-top: 10px;
  cursor: pointer;
`;