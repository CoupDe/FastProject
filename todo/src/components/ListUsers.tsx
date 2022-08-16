import { Paper, useTheme } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hook/hook";
import { increment } from "../slices/testSlice";
import { userApi } from "../slices/userApi";
import { IUser } from "../typeinterfaces/types";

interface ListUserProps {
  test: IUser[];
}

const ListUsers: FC<ListUserProps> = ({ test }) => {
  const dispatch = useAppDispatch();

  const { data: users, isLoading } = userApi.useGetUsersQuery();
  const theme = useTheme();
  const count = useAppSelector((state) => state.counter.value);
  const {
    data: user,
    isLoading: load,
    error,
    isSuccess,
  } = userApi.useGetUserQuery(count + 1);

  return (
    <div>
      <Paper>
        <h1>{count}</h1>
      </Paper>
      {load && <h2>...Load</h2>}
      {error && <h2>Ошибка</h2>}

      {isSuccess && (
        <h2>
          {user.name} , <b>Phone</b>: {user.phone}
        </h2>
      )}
      <ul></ul>
      {/* {users && users.map((user) => console.log(user))} */}
      <button onClick={() => dispatch(increment())}>click</button>
    </div>
  );
};

export default ListUsers;
