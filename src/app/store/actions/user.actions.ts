import {Action} from '@ngrx/store';
import {IUser} from '../../interfaces/user.interface';

export enum EUserActions {
  GetUsers = '[Users] Get users',
  GetUsersSuccess = '[Users] Get users success',
  GetUser = '[User] Get user',
  GetUserSuccess = '[User] Get user success',
  UpdateUser = '[User] Update user',
  UpdateUserSuccess = '[User] Update user success',
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
  constructor(public payload: string) {}
  public readonly type = EUserActions.GetUser;
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUser) {}
}

export class UpdateUser implements Action {
  constructor(public payload: IUser) {}
  public readonly type = EUserActions.UpdateUser;
}

export class UpdateUserSuccess implements Action {
  constructor(public payload: IUser) {}
  public readonly type = EUserActions.UpdateUserSuccess;
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess | UpdateUser | UpdateUserSuccess;
