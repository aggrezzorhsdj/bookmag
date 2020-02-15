import {Injectable} from "@angular/core";
import { Effect, ofType, Actions} from "@ngrx/effects";

import {Store, select} from "@ngrx/store";

import { of } from 'rxjs';
import {switchMap, map, withLatestFrom} from "rxjs/operators";

import {IAppState} from "../state/app.state";

import {GetUserSuccess, GetUsersSuccess, GetUser, GetUsers, EUserActions, } from "../actions/user.actions";

import {AuthService} from "../../services/auth.service";
import {GetdataService} from "../../services/getdata.service";
import {User} from "../../models/user";
import {selectUserList} from "";

@Injectable()
export class UserEffects {
  @Effect()
  getUsers$ = this.action$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );
  constructor(
    private action$: Actions,
    private getData: GetdataService,
    private store: Store<IAppState>
  ) {
  }
}
