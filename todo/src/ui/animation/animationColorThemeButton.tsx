import styled, { keyframes, css } from "styled-components";

//Анимация появления солнца
const sunBlurEnter = keyframes`
0% {
    transform: translateY(10px) rotate(720deg);
    filter: blur(10px);
    opacity: 0;
  }
  100% {
    transform: translateY(-10px) rotate(0deg);
    opacity: 1;
  }`;
//Анимация выхода солнца
const sunBlurExit = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
      opacity: 1;
      
    }
    100% {
      transform: translateY(0px) rotate(720deg);
      filter: blur(150px);
      opacity: 0;
    }`;

//Анимация появления рассвета
const sunRiseEnter = keyframes`
  0% {
    transform: rotateX(0);
    transform-origin: bottom;
    opacity: 1;
  }
  100% {
    transform: rotateX(100deg);
    transform-origin: bottom;
    opacity: 0;
  }`;
//Анимация выхода рассвета
const sunRiseExit = keyframes`
  0% {
    transform: rotateX(100deg);
    transform-origin: bottom;
    opacity: 0;
    
  }
  100% {
    transform: rotateX(0);
    transform-origin: bottom;
    opacity: 1;
  }`;
//Анимация смены dark/light
const switchMode = keyframes`
    0% {
      transform: translateX(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateX(-100px) rotate(-540deg);
      opacity: 0;
    }
    `;
export { sunBlurEnter, sunBlurExit, sunRiseEnter, sunRiseExit, switchMode };
// const sunriseAnimation = (props: ITransitionProps) =>
//   css`
//     animation: ${sunRiseShow};
//     animation-duration: 0.5s;
//     animation-fill-mode: both;
//     animation-direction: ${props.step === "exiting"
//       ? "alternate-reverse"
//       : null};
//   `;
