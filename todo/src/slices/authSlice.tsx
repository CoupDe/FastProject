import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStatusAuthInfo, IUserAuth } from "../typeinterfaces/types";

const initialState: IUserAuth & IStatusAuthInfo = {
  token: { access: "", refresh: "" },
  userinfo: { username: "", first_name: "" },
  authLogInfo: { status: "default", payloadInfo: "" },
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authUserToken: (state, action: PayloadAction<IUserAuth>) => {
      state.token = action.payload.token;
      state.userinfo = action.payload.userinfo;
    },
    logout: () => initialState,
    statusAuth: (state, action: PayloadAction<IStatusAuthInfo>) => {
      state.authLogInfo = action.payload.authLogInfo;
      console.log("CreateSlice", state.authLogInfo);
    },
  },
});

export const { authUserToken, logout, statusAuth } = authSlice.actions;
export default authSlice;
