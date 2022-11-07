import axios from "axios";
import { useSelector } from "react-redux";
import { useFetchTaskListQuery } from "../../redux/api/taskApi";
import { RootState } from "../../redux/store";
import { IUserToken } from "../../typeinterfaces/types";

const initial = {
  login_field: "coup",
  password: "C0l0ssok",
};

let token: IUserToken = { access: "", refresh: "" };
const TaskList = () => {
  const sliceToken = useSelector((state: RootState) => state.authSlice.token);
  const { data } = useFetchTaskListQuery();
  function getData() {
    console.log("data", data);
  }
  async function axiosGetData() {
    const bearerToken = `Bearer ${sliceToken?.access}`;

    const res = await axios.get(`http://127.0.0.1:8000/api/v1/tasklist/`, {
      headers: { Authorization: bearerToken },
    });

    console.log("axios", res.data);
  }
  async function login() {
    const result = await axios.post(
      `http://127.0.0.1:8000/users/token/`,
      initial
    );

    ({ access: token.access, refresh: token.refresh } = result.data);

    console.log("axios TOKEN", token);
    console.log("sliceToken TOKEN", sliceToken);
    // .then((res) => {
    //   console.log(res.data);
    //   const { access, refresh } = res.data;

    //   console.log(token);
    //   console.log({ ...token });
    // })
    // .then(() => console.log("token", token));
  }
  return (
    <div>
      <button onClick={() => getData()}>ads</button>
      <button onClick={() => axiosGetData()}>axios</button>
      <button onClick={() => login()}>POST axios</button>
      <ul></ul>
    </div>
  );
};

export default TaskList;
