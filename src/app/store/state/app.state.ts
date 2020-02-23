import {RouterReducerState} from '@ngrx/router-store';

import {IUserState, initialUserState} from './user.state';
import {IProductState, initialProductState} from './product.state';
import {ICartState, initialCartState} from './cart.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  products: IProductState;
  cart: ICartState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  products: initialProductState,
  cart: initialCartState
}

export function getInitialState(): IAppState {
  return initialAppState;
}
