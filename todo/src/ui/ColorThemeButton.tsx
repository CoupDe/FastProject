import { Box, Button, useTheme } from "@mui/material";
import { FC, useContext, useState } from "react";
import { Transition } from "react-transition-group";
import { ColorModeContext } from "../App";
import IconStep from "./animation/animationColorThemeButton";
import { MySunRise2 } from "./animation/StyledSvgIcon";

import "./testBtnCss.css";

//Анимация заката
// const MySunset = styled(Sunset)`
//   width: 35px;
//   fill: inherit;
//   color: inherit;

//   animation: ${(props: ITransitionProps) =>
//       props.step === "entering" && sunRiseEnter}
//     0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045) both;
//   /* cursor: pointer; */
// `;

interface IColorButtonProps {
  // children: React.ReactNode;
}
const ColorThemeButton: FC<IColorButtonProps> = () => {
  const changeColorMode = useContext(ColorModeContext);

  const [switchColorMode, setSwitchColorMode] = useState<Boolean>(false);
  const [hoverTransition, setHoverTransition] = useState<Boolean>(false);
  const [switchTransition, setSwitchTransition] = useState<Boolean>(false);

  const theme = useTheme();

  function handleShowTransition() {
    setHoverTransition((prev) => !hoverTransition);
    setSwitchTransition((prev) => !switchTransition);
    console.log("Main", switchTransition);
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

  function switchMode() {
    setSwitchColorMode((prev) => !switchColorMode);
    // setSwitchTransition((prev) => !switchTransition);
    changeColorMode();
    // console.log(switchTransition);
  }

  return (
    <Box>
      <Button variant="outlined" onClick={changeColorMode}>
        <p>asdsa</p>
      </Button>
      <Button variant="outlined" onClick={handleShowTransition}>
        Test animation
      </Button>

      <Box
        sx={{
          width: "30px",
          height: "30px",
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
        onClick={switchMode}
      >
        <Transition
          key={theme.palette.mode}
          in={!!hoverTransition}
          timeout={300}
          appear
        >
          {(state) => (
            <IconStep
              themeMode={theme.palette.mode}
              state={state}
              switchTransition={!!switchTransition}
            />
          )}
        </Transition>
      </Box>

      <Box>
        {/* <Transition
          key={theme.palette.mode}
          in={!!hoverTransition}
          timeout={300}
          appear
        >
          {(state) => }
        </Transition> */}
      </Box>
    </Box>
  );
};

export default ColorThemeButton;
