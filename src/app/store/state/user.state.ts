import {IUser} from '../../interfaces/user.interface';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
  error: string;
  isLogin: boolean;
}
export const initialUserState: IUserState = {
  users: null,
  selectedUser: null,
  error: null,
  isLogin: false
}
