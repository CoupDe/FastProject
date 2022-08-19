import { configureStore } from "@reduxjs/toolkit";
import { taskApi } from "./taskApiSlice";
import { counterSlice } from "./testSlice";
import { userApi } from "./userApi";

export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware), //Необходим для использования функционала RTKQ
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
