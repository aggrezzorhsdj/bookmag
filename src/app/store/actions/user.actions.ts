import {Action} from '@ngrx/store';
import {IUser} from '../../interfaces/user.interface';

export enum EUserActions {
  GetUsers = '[Users] Get users',
  GetUsersSuccess = '[Users] Get users success',
  GetUser = '[User] Get user',
  GetUserSuccess = '[User] Get user success',
  UpdateUser = '[User] Update user',
  UpdateUserSuccess = '[User] Update user success',
  UpdateUserError = '[User] Update user error',
  AuthUser = '[User] Auth user',
  AuthUserSuccess = '[User] Auth user success',
  AuthUserError = '[User] Auth user error',
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
  public readonly type = EUserActions.UpdateUser;
  constructor(public payload: IUser) {}
}

export class UpdateUserSuccess implements Action {
  public readonly type = EUserActions.UpdateUserSuccess;
  constructor(public payload: IUser) {}
}

export class UpdateUserError implements Action {
  public readonly type = EUserActions.UpdateUserError;
  constructor(public payload: string) {}
}

export class AuthUser implements Action {
  public readonly type = EUserActions.AuthUser;
  constructor(public payload: IUser) {}
}

export class AuthUserSuccess implements Action {
  public readonly type = EUserActions.AuthUserSuccess;
  constructor(public payload: IUser) {}
}

export class AuthUserError implements Action {
  public readonly type = EUserActions.AuthUserError;
  constructor(public payload: string) {}
}
export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess | UpdateUser | UpdateUserSuccess | UpdateUserError | AuthUser | AuthUserSuccess | AuthUserError;
