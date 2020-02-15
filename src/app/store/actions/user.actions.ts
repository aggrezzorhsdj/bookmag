import {Action} from '@ngrx/store';
import {IUserState} from '../state/user.state';
import {IUser} from '../../interfaces/user.interface';

export enum EUserActions {
  GetUsers = '[Users] Get users',
  GetUsersSuccess = '[Users] Get users success',
  GetUser = '[User] Get user',
  GetUserSuccess = '[User] Get user success',
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(private payload: IUser[]) {}
}

export class GetUser implements Action {
  constructor(private payload: IUser) {}
  public readonly type = EUserActions.GetUser;
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(private payload: IUser) {}
}
