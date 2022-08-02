import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./testSlice";
import { userApi } from "./userApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    counter: counterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware), //Необходим для использования функционала RTKQ
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
