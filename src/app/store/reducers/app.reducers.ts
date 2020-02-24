import {ActionReducerMap} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';

import {IAppState} from '../state/app.state';
import {userReducers} from './user.reducers';
import {productReducers} from './product.reducers';
import {cartReducers} from './cart.reducers';
import {checkoutReducers} from './checkout.reducers';
import {InjectionToken} from '@angular/core';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  products: productReducers,
  cart: cartReducers,
  checkout: checkoutReducers
};

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<IAppState>>('App Reducers');
export const reducerProvider = { provide: REDUCERS_TOKEN, useValue: appReducers };
