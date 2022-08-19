import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITask, ITaskList } from "../typeinterfaces/types";

export const taskApi = createApi({
  reducerPath: "taskApi", //Уникальное название среза
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/v1/",
  }), //Базовый url для запроса
  endpoints: (build) => ({
    //функция возвращающая некоторый объект //название метода  и запрос
    //build.query --> получение build.mutation --> CRUD
    getTaskList: build.query<ITaskList, void>({
      query: () => ({
        url: "tasklist",
      }),
    }),
    //                Ожидаемый тип
    //                   *        тип параметра
    getTask: build.query<ITask, number>({ query: (id) => `task/${id}` }),
  }),
});
export const { useGetTaskListQuery, useGetTaskQuery } = taskApi;
