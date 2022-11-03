
import NavBar from "../components/Workspace/NavBar";
import TaskList from "../components/Workspace/TaskList";
import {
  AsideContainer, GridContainer, MainContainer, NavContainer
} from "./StyledWorkSpace";

const ToDoLayout = () => {
  return (
    <GridContainer>
      <NavContainer forwardedAs="nav" elevation={12}>
        <NavBar />
      </NavContainer>
      <AsideContainer forwardedAs="aside" elevation={12} aria-label="Menu">
        Menu
      </AsideContainer>

      <MainContainer elevation={12}>
        <TaskList />
      </MainContainer>
    </GridContainer>
  );
};

export default ToDoLayout;
