import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import endpoints from "../const/endpoints";
import { authConvertData } from "../services/parseData/authUserConverter";
import { authUserToken } from "../slices/authSlice";
import { RootState } from "../slices/store";

import {
  IAuthRequest,
  IUser,
  IUserAuth,
  UserFetchData,
} from "../typeinterfaces/types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${endpoints.BASE}users/`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authSlice.token?.access; //Метод getstate() получает доступ к стору, дальше получается
      //токен, если он естьб ЧТО ТАКОЕ ROOTSTATE?
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        console.log(headers.get("Authorization"));
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => ({
        url: "list/",
        credentials: "omit",
      }),
    }),

    signIn: builder.mutation<IUserAuth, IAuthRequest>({
      query: (data: IAuthRequest) => {
        console.log("query", data);
        return {
          url: endpoints.AUTH.TOKEN,
          method: "POST",
          body: data,
          credentials: "omit", //Не понятно почему не пропускает заголовком include
        };
      },

      transformResponse: (response: UserFetchData): IUserAuth => {
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
      //Данная функция представляет возможность допю функционала до запроса и после запроса
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled; //response
          console.log("RESPONSE DATA ONQUERY", data);
          if (data.token) {
            dispatch(authUserToken(data));
          }
        } catch (err) {}
      },
    }),
  }),
});

export const { useGetUsersQuery, useSignInMutation } = authApi;
