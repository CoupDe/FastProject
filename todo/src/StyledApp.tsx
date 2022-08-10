import { Box, PaletteMode } from "@mui/material";
import styled from "styled-components";
import darkBackground from "../src/images/background/darkBackground.png";
import lightBackground from "../src/images/background/lightBackground.png";
type backroundImgProps = {
  themeColor: PaletteMode;
};
const BackgroundBox = styled(Box)<backroundImgProps>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) =>
    props.themeColor === "dark" ? darkBackground : lightBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;

export { BackgroundBox };
