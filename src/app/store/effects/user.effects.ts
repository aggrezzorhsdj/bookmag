import {Injectable} from '@angular/core';
import { Effect, ofType, Actions} from '@ngrx/effects';

import {Store, select} from '@ngrx/store';

import { of } from 'rxjs';
import {switchMap, map, withLatestFrom, catchError} from 'rxjs/operators';

import {IAppState} from '../state/app.state';

import {
  GetUserSuccess,
  GetUsersSuccess,
  GetUser,
  GetUsers,
  EUserActions,
  UpdateUser,
  UpdateUserSuccess, UpdateUserError, AuthUser, AuthUserSuccess, AuthUserError,
} from '../actions/user.actions';

import {GetDataService} from '../../services/get-data.service';
import {selectUserList} from '../selectors/user.selectors';
import {IUser} from '../../interfaces/user.interface';
import {AuthService} from '../../services/auth.service';
import {NotificationsService} from '../../notifications/notifications.service';


@Injectable()
export class UserEffects {
  @Effect()
  authUser$ = this.actions$.pipe(
      ofType<AuthUser>(EUserActions.AuthUser),
      switchMap(action => {
        console.log(action);
        return this.auth.login(action.payload).pipe(
            map((res) => {
                this.notify.notify('Вход выполнен', 1, 2000);
                return new AuthUserSuccess(res);
            }),
            catchError((err) => {
                this.notify.notify(err, 0, 2000);
                return of(new AuthUserError(err));
            })
        );
      })
  );
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    switchMap((id) => this.getData.getUser(id)),
    switchMap((userHttp: IUser) => of(new GetUserSuccess(userHttp)))
  );
  @Effect()
  updateUser$ = this.actions$.pipe(
    ofType<UpdateUser>(EUserActions.UpdateUser),
    switchMap((data) => {
      return this.getData.updateData(data, 'users').pipe(
          map((res: IUser) => {
              this.notify.notify('Данные обновленны', 1, 2000);
              return new UpdateUserSuccess(res);
          }),
          catchError((err) => {
              this.notify.notify(err, 0, 2000);
              return of(new UpdateUserError(err));
          })
      );
    })
  );
  constructor(
    private actions$: Actions,
    private getData: GetDataService,
    private auth: AuthService,
    private notify: NotificationsService,
    private store: Store<IAppState>
  ) {
  }
}
