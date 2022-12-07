import { motion, Variants } from "framer-motion";
import NavBar from "../components/Workspace/NavBar";
import TaskList from "../components/Workspace/TaskList";
import { useFetchTaskListQuery } from "../redux/slices/taskApiSlice";

import {
  AsideContainer,
  GridContainer,
  MainContainer,
  NavContainer,
} from "./StyledWorkSpace";
const taskContainer = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const MotionContainer = motion(MainContainer); //Передача пропсов motion на кастомный компонент
const ToDoLayout = () => {
  const { data: taskList, isSuccess } = useFetchTaskListQuery();

  return (
    <GridContainer>
      <NavContainer forwardedAs="nav" elevation={12}>
        <NavBar />
      </NavContainer>
      <AsideContainer forwardedAs="aside" elevation={12} aria-label="Menu">
        Menu
      </AsideContainer>

      <MotionContainer
        variants={taskContainer}
        initial={"hidden"}
        animate={"visible"}
        // variants={container}
        // animate="show"
        forwardedAs={"main"}
        elevation={12}
      >
        {isSuccess && <TaskList taskList={taskList} />}
      </MotionContainer>
    </GridContainer>
  );
};

export default ToDoLayout;
