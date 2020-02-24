import {RouterReducerState} from '@ngrx/router-store';

import {IUserState, initialUserState} from './user.state';
import {IProductState, initialProductState} from './product.state';
import {ICartState, initialCartState} from './cart.state';
import {ICheckoutState, initialCheckoutState} from './checkout.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  products: IProductState;
  cart: ICartState;
  checkout: ICheckoutState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  products: initialProductState,
  cart: initialCartState,
  checkout: initialCheckoutState
}

export function getInitialState(): IAppState {
  return initialAppState;
}
