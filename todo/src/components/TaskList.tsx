import { Paper } from "@mui/material";
import { authApi } from "../api/authApi";

import { taskApi } from "../slices/taskApiSlice";

const TaskList = () => {

  const { data: usersList } = authApi.useGetUsersQuery();
  const { data: taskList, isLoading, error } = taskApi.useFetchTaskListQuery();
  console.log(usersList);

  taskList?.map((task) => console.log(task.id));

  return (
    <div>
      <Paper>
        <h1>{}</h1>
      </Paper>

      <ul></ul>
    </div>
  );
};

export default TaskList;
