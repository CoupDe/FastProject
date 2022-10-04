export interface IUser {
  user: {
    id: number;
    first_name: string;
    username: string;
    email: string;
  };
  token: { access: string; refresh: string };
}
//************FORM TYPES & INTERFACE*************************************
export interface IAuthFormValuesByToken {
  login_field: string;
  password: string;
}
//***************API AUTH TYPES & INTERFACE***************
export interface IAuthRequest {
  login_field: string;
  password: string;
}
export interface IUserToken {
  access: string;
  refresh: string;
}
export interface IUserInfo {
  username: string;
  first_name: string;
}
// export type UserFetchData = IUserToken & IUserInfo;
export interface UserFetchData extends IUserToken, IUserInfo {}
//***************Расширение сделано с целью
//представления данных в более понятном стиле***************
export interface IUserAuth {
  token: IUserToken | null;
  userinfo: IUserInfo;
  isAuth?: boolean;
}

//***************API TASK TYPES & INTERFACE***************
export interface ITask {
  created_at: Date;
  description: string;
  id: number;
  importance_task: string;
  task: string;
  isComplete: boolean;
  updated_at: Date;
}

//***************ERROR TYPES & INTERFACE***************
export interface IError {
  detail?: string[];
}

export interface IAuthFormError {
  status: any;
  data?: unknown;
}

export interface IStatusProps {
  isError: boolean;
  errorMessage: string;
  isSuccess: boolean;
  isLoading: boolean;
  first_name: string;
}

export interface IStatusAuthInfo {
  authLogInfo: {
    status: "error" | "loading" | "success" | "default";
    payloadInfo: string;
  };
}
//***************GAME***************
export interface IGameStep {
  compStep: number[];
  playerStep: number[];
}

export interface IStatusGame {
  winner: number[] | null;
  draw: boolean;
}
