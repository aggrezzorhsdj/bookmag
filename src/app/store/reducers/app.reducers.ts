import {ActionReducerMap} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';

import {IAppState} from '../state/app.state';
import {ConfigActions} from '../actions/config.actions';
import {UserActions} from '../actions/user.actions';
import {userReducers} from './user.reducers';
import {configReducers} from './config.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  config: configReducers
};
