import AssignmentIcon from "@mui/icons-material/Assignment";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import WarningIcon from "@mui/icons-material/Warning";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import assertNever from "assert-never";
// import Dayjs from "dayjs";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import { FC, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ITask, PriorityTask } from "../../typeinterfaces/types";
import StyledTask from "./StyledTask";
interface iPropsTask {
  task: ITask;
}
const ss = `This impressive paella is a perfect party dish and a fun meal to
cook together with your guests. Add 1 cup of frozen peas along with
the mussels, if you like. This impressive paella is a perfect party
dish and a fun meal to cook together with your guests. Add 1 cup of
frozen peas along with the mussels, if you like. This impressive
paella is a perfect party dish and a fun meal to cook together with
your guests. Add 1 cup of frozen peas along with the mussels, if you
like.`;
const variantsPaper: Variants = {
  hoverEffect: {
    scale: [1, 0.97, 1.03],

    transition: {
      type: "spring",
      stiffness: 200,
      damping: 30,
      duration: 0.3,
    },
  },
  hoverEffectEnd: {
    scale: [1.03, 0.97, 1],
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 30,
      duration: 0.25,
      delay: 0.1,
    },
  },
  tapEffect: { scale: 0.9 },
};
const variantButton: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    scale: [1, 0.9, 1.1],
    transition: {
      delay: 0.1,
      duration: i * 0.1,
    },
  }),
  initial: { opacity: 0, scale: 0 },
  hide: (i: number) => ({
    opacity: 0,
    scale: [1.1, 0.9, 1],
    transition: {
      delay: 0.1,
      duration: i * 0.2,
    },
  }),
};
//Возварт иконки приоритета задачи
function taskStatus(importance_task: PriorityTask): JSX.Element {
  switch (importance_task) {
    case "AA":
      return (
        <ErrorIcon sx={{ marginTop: "4px" }} fontSize="large" color="error" />
      );
    case "BB":
      return (
        <WarningIcon
          sx={{ marginTop: "4px" }}
          fontSize="large"
          color="warning"
        />
      );
    case "CC":
      return (
        <AvTimerIcon
          sx={{ marginTop: "4px" }}
          fontSize="large"
          color="success"
        />
      );
    default:
      return assertNever(importance_task, true); //Функция которая утверждает что все варианты рассмотрены
  }
}
const MotionPaper = motion(StyledTask);
const MotionButton = motion(IconButton);
const Task: FC<iPropsTask> = ({ task }): JSX.Element => {
  //RRDV module
  // let state = location.state as { backgroundLocation?: Location };
  // console.log(state);
  // const [angle] = useState(20);
  const controls = useAnimation();
  const [showButton, setShowButton] = useState<boolean>(false);

  // const dataCreate = Dayjs(String(task.created_at)).format("DD-MM-YYYY/H:M");

  // const y = useMotionValue(0.5);
  // const x = useMotionValue(0.5);
  // const rotateY = useTransform(x, [0, 1], [-angle, angle], {
  //   clamp: true,
  // });
  // const rotateX = useTransform(y, [0, 1], [angle, -angle], {
  //   clamp: true,
  // });

  const hoverShowButtonGroup = () => {
    setShowButton(true);
    controls.start("hoverEffect");
  };
  const hoverHideButtonGroup = () => {
    controls.start("hoverEffectEnd");
    setShowButton(false);
    // x.set(0.5, true);
  };
  // const tiltTask = (e: React.PointerEvent<HTMLDivElement>) => {
  //   const bounds = e.currentTarget.getBoundingClientRect();

  //   const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth;

  //   x.set(xValue, true);
  //   //  y.set(yValue, true);
  // };

  return (
    <MotionPaper
      component={motion.div}
      animate={controls}
      variants={variantsPaper}
      // onPointerMove={(e: React.PointerEvent<HTMLDivElement>) => tiltTask(e)}
      elevation={6}
      onHoverStart={() => hoverShowButtonGroup()}
      onHoverEnd={() => hoverHideButtonGroup()}
    >
      <Card variant="outlined">
        <CardHeader
          avatar={<AssignmentIcon aria-label="task">R</AssignmentIcon>}
          action={taskStatus(task.importance_task)}
          title={task.short_description}
          subheader={task.created_at}
        ></CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {/* Добавить описание */}
            {ss.length > 300 ? ss.slice(0, 200) + "......." : ss}
          </Typography>
          <AnimatePresence>
            {showButton && (
              <CardActions
                sx={{ position: "absolute", top: "0", right: "30px" }}
                disableSpacing
              >
                <RouterLink to={`${task.id}`} state={task}>
                  <MotionButton
                    key={1}
                    custom={2}
                    initial={"initial"}
                    animate={"visible"}
                    exit={"hide"}
                    variants={variantButton}
                    aria-label="edit task"
                  >
                    <ModeEditIcon fontSize="medium" />
                  </MotionButton>{" "}
                </RouterLink>
                <MotionButton
                  key={2}
                  custom={3}
                  initial={"initial"}
                  animate={"visible"}
                  exit={"hide"}
                  variants={variantButton}
                  aria-label="close task"
                >
                  <CloseIcon fontSize="large" />
                </MotionButton>
              </CardActions>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </MotionPaper>
  );
};

export default Task;
