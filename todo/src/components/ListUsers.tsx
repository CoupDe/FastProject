import { Paper } from "@mui/material";
import { useAppDispatch } from "../hook/hook";
import { taskApi } from "../slices/taskApiSlice";

import { ITaskList, IUser } from "../typeinterfaces/types";

const ListUsers = () => {
  const dispatch = useAppDispatch();

  const { data: taskList, isLoading } = taskApi.useGetTaskListQuery();
  console.log(taskList);
  const ss: ITaskList = taskList!;
  console.log(typeof(ss.tasks.length))
  
  console.log(ss);
  return (
    <div>
      <Paper>
        <h1>{}</h1>
      </Paper>

      <ul></ul>
    </div>
  );
};

export default ListUsers;
