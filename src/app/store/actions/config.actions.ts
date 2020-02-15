import {Action} from '@ngrx/store';
import {IConfig} from '../../interfaces/config.interface';

export enum EConfigActions {
  GetConfig = '[Users] Get config',
  GetConfigSuccess = '[Users] Get conifg success',
}

export class GetConfig implements Action {
  public readonly type = EConfigActions.GetConfig;
}

export class GetConfigSuccess implements Action {
  public readonly type = EConfigActions.GetConfigSuccess;
  constructor(public payload: IConfig) {}
}

export type ConfigActions = GetConfig | GetConfigSuccess;
