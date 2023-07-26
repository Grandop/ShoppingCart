import { styled, css } from "styled-components";

interface Animated {
  anim: boolean;
}

export const Cart = styled.div<Animated>`
  ${({ anim }) => css`
    width: 100%;
    max-width: 330px;
    background-color: #fff;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    padding: 100px 20px;
    overflow: auto;
    transform: translateX(${anim ? "100%" : "0"});
    transition: all 500ms ease;
  `}
`;

export const CartResume = styled.div`
  font-size: 29px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  padding: 35px 0 15px;
  border-top: 1px solid #ddd;
`;