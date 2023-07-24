import { styled } from "styled-components";

export const Products = styled.div`
  padding: 120px 20px 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1100px;
  margin-inline: auto;
`;