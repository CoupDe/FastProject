import { motion } from "framer-motion";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { ITask } from "../../typeinterfaces/types";
import Task from "./Task";

interface IPropsTask {
  taskList: ITask[];
}

const TaskList: FC<IPropsTask> = ({ taskList }: IPropsTask) => {
  // /const { taskList } = useSelector((state: RootState) => state.viewTaskSlice);

  function getData() {}

  const item = {
    visible: {
      opacity: [0, 1],
      y: [-100, 30, 0],
    },
  };

  return (
    <>
      {/* <button onClick={() => getData()}>ads</button> */}
      {taskList.map((task) => (
        <motion.article key={task.id} variants={item}>
          <Task task={task} />
        </motion.article>
      ))}
      <Outlet />
    </>
  );
};

export default TaskList;
