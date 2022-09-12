import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITask } from "../typeinterfaces/types";

export const taskApi = createApi({
  reducerPath: "taskApi", //Уникальное название среза
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/v1",
  }), //Базовый url для запроса
  endpoints: (build) => ({
    //функция возвращающая некоторый объект //название метода  и запрос
    //build.query --> получение build.mutation --> CRUD
    fetchTaskList: build.query<ITask[], void>({
      query: () => ({
        url: "/tasklist/",
      }),
    }),
    //                Ожидаемый тип
    //                   *        тип параметра
    fetchTask: build.query<ITask, number>({ query: (id) => `/task/${id}` }),
  }),
});
export const { useFetchTaskListQuery, useFetchTaskQuery } = taskApi;
