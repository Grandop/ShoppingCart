import {styled} from 'styled-components';

export const CartButton = styled.button`
  font-size: 24px; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  color: #333;
`;

export const CartCount = styled.span`
  background-color: red;
  color: white;
  font-weight: 500;
  min-width: 15px;
  min-height: 15px;
  position: absolute;
  border-radius: 15px;
  top: 0;
  left: 0;
  font-size: 11px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
