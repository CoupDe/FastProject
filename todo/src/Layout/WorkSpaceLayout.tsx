import React from "react";
import { default as Grid } from "@mui/material/Unstable_Grid2";

import Paper from "@mui/material/Paper";
import {
  GridContainer,
  AsideContainer,
  NavContainer,
  MainContainer,
} from "./StyledWorkSpace";
import { Box } from "@mui/material";
import NavBar from "../components/Workspace/NavBar";

const ToDoLayout = () => {
  return (
    <GridContainer>
      <AsideContainer forwardedAs="aside" elevation={12} aria-label="Menu">
        Menu
      </AsideContainer>
      <NavContainer forwardedAs="nav" elevation={12}>
        <NavBar />
      </NavContainer>
      <MainContainer elevation={12}>Main</MainContainer>
    </GridContainer>
  );
};

export default ToDoLayout;
