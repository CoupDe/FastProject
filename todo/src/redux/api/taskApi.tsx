import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITask } from "../../typeinterfaces/types";
import ENDPOINTS from "../../const/endpoints";

export const taskApi = createApi({
  reducerPath: "taskApi", //Уникальное название среза
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINTS.baseApi,
  }), //Базовый url для запроса
  endpoints: (build) => ({
    //функция возвращающая некоторый объект //название метода  и запрос
    //build.query --> получение build.mutation --> CRUD
    fetchTaskList: build.query<ITask[], void>({
      query: () => ({
        url: ENDPOINTS.TASK.TASKLIST,
      }),
    }),
    //                Ожидаемый тип
    //                   *        тип параметра
    fetchTask: build.query<ITask, number>({ query: (id) => `/task/${id}` }),
  }),
});
export const { useFetchTaskListQuery, useFetchTaskQuery } = taskApi;
