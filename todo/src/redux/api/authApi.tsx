import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { authUserToken } from "../slices/authSlice";



import endpoints from "../../const/endpoints";
import { authConvertData } from "../../services/parseData/authUserConverter";
import { RootState } from "../store";
import { IUser, IUserAuth, IAuthRequest, UserFetchData } from "../../typeinterfaces/types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${endpoints.BASE}users/`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authSlice.token?.access; //Метод getstate() получает доступ к стору, дальше получается
      //Если есть токен
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
        console.log("requestMy", data);
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
        //Неправильная конструкция
        try {
          authConvertData(response);
        } catch (err) {
          console.log("Ошибка в преобразовании данных", { err });
        }
        const myResponse: IUserAuth = authConvertData(response);

        return myResponse;
      },
      //Данная функция представляет возможность доп. функционала до запроса и после запроса
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled; //response

          if (data.token) {
            dispatch(authUserToken(data));
          }
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetUsersQuery, useSignInMutation } = authApi;
