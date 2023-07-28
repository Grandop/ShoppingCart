import { styled } from "styled-components";

export const Products = styled.div`
  padding: 120px 20px 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1100px;
  margin-inline: auto;
  position: relative;
`;

export const LabelError = styled.h1`
  margin-top: 100px;
  position: absolute;
  align-self: center;
  justify-self: center;
  font-family: 'Montserrat', sans-serif;
  color: #000;
  opacity: 0.5;
  font-size: 20px;
`;