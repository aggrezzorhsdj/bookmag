import {Injectable} from "@angular/core";
import { Effect, ofType, Actions} from "@ngrx/effects";

import {Store, select} from "@ngrx/store";

import { of } from 'rxjs';
import {switchMap, map, withLatestFrom} from "rxjs/operators";

import {IAppState} from '../state/app.state';

import {
  GetUserSuccess,
  GetUsersSuccess,
  GetUser,
  GetUsers,
  EUserActions,
  UpdateUser,
  UpdateUserSuccess,
} from '../actions/user.actions';

import {GetDataService} from '../../services/get-data.service';
import {selectUserList} from '../selectors/user.selectors';
import {IUser} from '../../interfaces/user.interface';


@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    switchMap((id) => this.getData.getUser(id)),
    switchMap((userHttp: IUser) => of(new GetUserSuccess(userHttp)))
  );
  @Effect()
  updateUser$ = this.actions$.pipe(
    ofType<UpdateUser>(EUserActions.UpdateUser),
    switchMap((data) => this.getData.updateUser(data)),
    switchMap(response => of(new UpdateUserSuccess(response)))
  );
  constructor(
    private actions$: Actions,
    private getData: GetDataService,
    private store: Store<IAppState>
  ) {
  }
}
