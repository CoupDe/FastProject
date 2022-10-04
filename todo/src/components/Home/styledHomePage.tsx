import { Box, Paper } from "@mui/material";
import { default as MyGrid } from "@mui/material/Unstable_Grid2";
import styled, { keyframes } from "styled-components";
const slidein = keyframes`
  0% {
    transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
 `;
const hoverAnimation = keyframes` 
 0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1.1);
  }`;

const flipCard = keyframes` 0% {
  transform: rotateX(0);
  
}
100% {
 
  transform: rotateX(-180deg);  
  box-shadow:none
  
}
}`;
interface ICardProps {
  readonly $isTouched: boolean;
}
export const StyledGrid = styled(MyGrid)`
  transition: all 0.1s ease-in-out;

  &:hover {
    /* animation: ${hoverAnimation} 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      forwards; */
    transform: scale(1.1);
  }
`;

export const MyItem = styled(Paper)<ICardProps>`
  display: flex;
  justify-self: center;
  justify-content: center;
  animation: ${slidein} 0.6s ease-in both;
  &:hover {
    cursor: pointer;

    animation: ${(props) => props.$isTouched && flipCard} 0.4s
      cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }
`;
export const Reload = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 10;
  background-color: #fff1;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #fff5;
  }
`;
