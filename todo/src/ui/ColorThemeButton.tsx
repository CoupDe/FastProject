import { Box, Button, useTheme } from "@mui/material";
import { Sun, Sunrise, Sunset } from "@styled-icons/feather";
import Moon from "@mui/icons-material/Brightness3";
import { FC, useContext, useState } from "react";
import { Transition, SwitchTransition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import styled from "styled-components";
import { ColorModeContext } from "../App";
import {
  sunBlurEnter,
  sunBlurExit,
  sunRiseEnter,
  sunRiseExit,
  switchMode,
} from "./animation/animationColorThemeButton";

import "./testBtnCss.css";

interface ITransitionProps {
  readonly step?: TransitionStatus;
}
const modes = ["out-in", "in-out"];
//Я так и не понял как добавить атрибут reverse к анимации в styled component и в следствии приходится создавать 2 анимации
//Анимация проявления солнца

const MySun = styled(Sun)<ITransitionProps>`
  color: #ffb703;
  width: 35px;
  border-radius: 1px;
  fill: #ffb703;
  animation: ${(props: ITransitionProps) =>
      props.step === "entered" ? sunBlurEnter : sunBlurExit}
    0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const MySunRise = styled(Sunrise)<ITransitionProps>`
  width: 35px;
  fill: #b39854;
  color: #b39854;
  animation: ${(props: ITransitionProps) =>
      props.step === "entering" ? sunRiseEnter : sunRiseExit}
    0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045) both;
`;

//Анимация заката
const MySunset = styled(Sunset)`
  width: 35px;
  fill: inherit;
  color: inherit;

  animation: ${(props: ITransitionProps) =>
      props.step === "entering" && sunRiseEnter}
    0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045) both;
  /* cursor: pointer; */
`;

interface IColorButtonProps {
  // children: React.ReactNode;
}
const ColorThemeButton: FC<IColorButtonProps> = () => {
  const changeColorMode = useContext(ColorModeContext);
  const [isShowButton, setIsShowButton] = useState<Boolean>(true);
  const [hoverTransition, setHoverTransition] = useState<Boolean>(false);

  const theme = useTheme();
  const { mode } = theme.palette;

  function handleShowTransition() {
    setHoverTransition((prev) => !hoverTransition);
  }
  function handleHoverTransitionOver(
    event: React.MouseEvent<HTMLOrSVGElement, MouseEvent>
  ): void {
    setHoverTransition((prev) => true);
  }
  function handleHoverTransitionOut(
    event: React.MouseEvent<HTMLOrSVGElement, MouseEvent>
  ): void {
    setHoverTransition((prev) => false);
  }

  function switchMode() {}

  function chooseComponent(state: TransitionStatus) {
    switch (state) {
      case "entering":
        return <MySunRise step={state} />;
      case "entered":
        return <MySun step={state} />;
      case "exiting":
        return <MySun step={state} />;
      case "exited":
        return <MySunRise step={state} />;
    }
  }
  function DarkButton() {
    return <></>;
  }

  function LightButton() {
    return (
      <Transition
        in={!!hoverTransition}
        timeout={300}
        onEnter={() => <MySunset />}
      >
        {(state) => <MySunset step={state} />}
      </Transition>
    );
  }

  return (
    <Box>
      <Button variant="outlined" onClick={changeColorMode}>
        <Moon />
      </Button>
      <Button variant="outlined" onClick={handleShowTransition}>
        Test animation
      </Button>

      <Box
        sx={{
          width: "30px",
          height: "40px",
          mt: "100px",
          ml: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          position: "absolut",
          cursor: "pointer",
        }}
        onMouseEnter={(event) => handleHoverTransitionOver(event)}
        onMouseLeave={(event) => handleHoverTransitionOut(event)}
        onClick={changeColorMode}
      >
        <Transition
          in={!!hoverTransition}
          timeout={300}
          // onEnter={() => console.log("onEnter")}
          // onEntering={() => console.log("onEntering")}
          // onEntered={() => console.log("onEntered")}
          // onExit={() => console.log("onExit")}
          // onExiting={() => console.log("onExiting")}
          // onExited={() => console.log("onExited")}
        >
          {(state) => chooseComponent(state)}
        </Transition>
      </Box>
    </Box>
  );
};

export default ColorThemeButton;
