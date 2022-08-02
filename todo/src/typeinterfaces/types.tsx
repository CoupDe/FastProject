export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface ITask {
  id: number;
  data_create?: Date;
  data_execution?: Date;
  description: string;
  isComplete: boolean;
}
