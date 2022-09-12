import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import endpoints from "../const/endpoints";
import { authConvertData } from "../services/parseData/authUserConverter";

import {
  IAuthRequest, IUser,
  IUserAuth,
  UserFetchData
} from "../typeinterfaces/types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${endpoints.BASE}users/`,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => ({
        url: "list/",
      }),
    }),
    // loginUser: builder.mutation<IAuthResponse, IAuthRequest>({
    //   query: (data: IAuthRequest) => {
    //     return {
    //       url: endpoints.AUTH.LOGIN,
    //       method: "POST",
    //       body: data,
    //       credentials: "include",
    //     };
    //   },

    //   transformResponse: (response: IAuthResponse) => response,
    // }),
    loginUserByToken: builder.mutation<IUserAuth, IAuthRequest>({
      query: (data: IAuthRequest) => {
        return { url: endpoints.AUTH.TOKEN, method: "POST", body: data };
      },
      transformResponse: (response: UserFetchData): IUserAuth => {
        console.log("authApi", response);
        //Typescript КОСТЫЛЬ - UserFetchData - по сути тип объединения IUserToken & IUserTokenName
        //можно ли трансформировать интерфейс на основе 2х других с вложением,
        //?Почему есди из Бэкэнда не передать поле username возникает ошибка, предположительно в этом месте
        //?Почему в интерфейсы установлены обязательные поля с типом string но может передаться из бэкэнда undefined
        try {
          authConvertData(response);
        } catch (err) {
          console.log("Ошибка в преобразовании данных", { err });
        }
        const myResponse: IUserAuth = authConvertData(response);

        return myResponse;
      },
    }),
  }),
});

export const {
  useGetUsersQuery,

  useLoginUserByTokenMutation,
} = authApi;
