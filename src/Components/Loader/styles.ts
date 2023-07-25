import { keyframes, styled } from "styled-components";
import { BiLoaderAlt } from 'react-icons/bi';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `;

export const LoaderIcon = styled(BiLoaderAlt)`
  font-size: 32px;
  margin: 200px auto 0;
  animation: ${spin} 0.7s linear infinite;
  width: 100%;
`;
