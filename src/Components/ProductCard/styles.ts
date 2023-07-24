import { styled } from "styled-components";

export const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const CardInfo = styled.div`
  padding: 20px;
  border-top: 1px solid #ddd;
`;

export const CardPrice = styled.h2`
  font-size: 30px;
  font-weight: 400;
  display: block;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
`;

export const CardTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  color: #000;
  opacity: 0.5;
  line-height: 1.5;
  font-weight: 500;
`;

export const ButtonAddCard = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 45px;
  height: 45px;
  margin: 12px 15px;
  color: #0c5dd6;
  display: none;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50px;
  background-color: white;
  opacity: 0.8;
  font-size: 24px;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 auto;
  position: relative;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 2px 10px rgba(0,0,0, 0.3);
    
    ${ButtonAddCard} {
      display: flex;
    }
  }
`;