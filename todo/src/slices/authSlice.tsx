import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStatusAuthInfo, IUserAuth } from "../typeinterfaces/types";

const initialState: IUserAuth & IStatusAuthInfo = {
  token: { access: "", refresh: "" },
  userinfo: { username: "", first_name: "" },
  authLogInfo: { status: "default", payloadInfo: "" },
  isAuth: false,
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authUserToken: (state, action: PayloadAction<IUserAuth>) => {
      state.isAuth = true;
      console.log("Slice", state.isAuth);
      state.token = action.payload.token;
      state.userinfo = action.payload.userinfo;
    },
    signOut: () => initialState,
    statusAuth: (state, action: PayloadAction<IStatusAuthInfo>) => {
      state.authLogInfo = action.payload.authLogInfo;
    },
  },
});

export const { authUserToken, signOut, statusAuth } = authSlice.actions;
export default authSlice;
