import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  background-color: white;
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgba(0,0,0, 0.4);
  gap: 13px;
  padding-right: 13px;
  border-radius: 10px;
`;

export const InputText = styled.input`
  padding: 13px;
  flex: 1;
  border: none;
  outline: none;
  font-size: 13px;
  font-weight: 500px;
  border-right: 1px solid #ddd;
  background: none;
`;

export const SearchButton = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  cursor: pointer;
`;