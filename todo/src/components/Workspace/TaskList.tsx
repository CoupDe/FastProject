import { Paper } from "@mui/material";
import { useGetUsersQuery } from "../../api/authApi";

const TaskList = () => {
  const { data: usersList } = useGetUsersQuery();
  function getData() {
    console.log(usersList);
  }
  console.log("TASK");

  if (usersList) {
    console.log("TASK", usersList);
  }
  return (       
    <div>
 
      <button onClick={() => getData()}>ads</button>
      <ul></ul>
    </div>
  );
};

export default TaskList;
