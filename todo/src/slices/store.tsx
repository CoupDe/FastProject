import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import authSlice from "./authSlice";

import { taskApi } from "./taskApiSlice";

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production", //Автоматически вычисляет включен ли DEVTOOLS у клиента или нет
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    authSlice: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([taskApi.middleware, authApi.middleware]), //Необходим для использования функционала RTKQ
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
