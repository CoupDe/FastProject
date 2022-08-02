import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../typeinterfaces/types";

interface IUserList {
  users: IUser[];
}

export const userApi = createApi({
  reducerPath: "userApi", //Уникальное названия среза
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }), //Базовый url для запроса
  endpoints: (build) => ({
    //функция возвращающая некоторый объект //название метода  и запрос
    //build.query --> получение build.mutation --> CRUD
    getUsers: build.query<IUserList, void>({
      query: () => ({
        url: "/users",
      }),
    }),
    //                Ожидаемый тип
    //                   *        тип параметра
    getUser: build.query<IUser, number>({ query: (id) => `users/${id}` }),
  }),
});
