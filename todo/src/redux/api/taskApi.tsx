// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { ITask } from "../../typeinterfaces/types";
// import ENDPOINTS from "../../const/endpoints";
// import { RootState } from "../store";
// import { getTask } from "../slices/viewSlice";
// import { Api } from "@mui/icons-material";
// import { authApi } from "./authApi";

import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQueryWithReauth } from "./authApi";

// export const taskApi = createApi({
//   reducerPath: "taskApi", //Уникальное название среза
//   refetchOnReconnect: true,
//   refetchOnFocus: true,
//   baseQuery: fetchBaseQuery({
//     baseUrl: ENDPOINTS.baseApi,
//     prepareHeaders: (headers, { getState }) => {
//       const token = (getState() as RootState).authSlice.token; //Метод getstate() получает доступ к сторузаголовок
//       //Если есть токен добавлять в Header каждого запроса
//       console.log("taskApi", token);
//       if (token?.access) {
//         headers.set("Authorization", `Bearer ${token.access}`);
//       }
//       return headers;
//     },
//   }), //Базовый url для запроса
//   endpoints: (build) => ({
//     //функция возвращающая некоторый объект //название метода  и запрос
//     //build.query --> получение build.mutation --> CRUD
//     fetchTaskList: build.query<ITask[], void>({
//       query: () => ({
//         url: ENDPOINTS.TASK.TASKLIST,
//       }),
//       async onQueryStarted(id, { dispatch, queryFulfilled }) {
//         try {
//           const { data } = await queryFulfilled;

//           // `onSuccess` side-effect

//           dispatch(getTask(data));
//         } catch (err) {
//           console.log(err);

//           // `onError` side-effect
//           // dispatch(messageCreated("Error fetching post!"));
//         }
//       },
//     }),
//     //                Ожидаемый тип
//     //                   *        тип параметра
//     fetchTask: build.query<ITask, number>({ query: (id) => `/task/${id}` }),
//   }),
// });
// export const { useFetchTaskListQuery, useFetchTaskQuery, usePrefetch } =
//   taskApi;
export const taskApi = createApi({
  reducerPath: "taskAuthApi",
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
