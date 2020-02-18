import {RouterReducerState} from '@ngrx/router-store';

import {IUserState, initialUserState} from './user.state';
import {IProductState, initialProductState} from './product.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  products: IProductState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  products: initialProductState
}

export function getInitialState(): IAppState {
  return initialAppState;
}
