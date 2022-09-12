import { IUserAuth, UserFetchData } from "../../typeinterfaces/types";

export const authConvertData = (response: UserFetchData): IUserAuth => {
  const mYResponse = {
    token: {
      access: response.access,
      refresh: response.refresh,
    },
    userinfo: {
      username: response.username,
      first_name: response.first_name,
    },
  };
  return mYResponse;
};
