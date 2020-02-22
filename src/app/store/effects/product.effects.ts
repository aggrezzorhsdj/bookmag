import {Injectable} from '@angular/core';
import { Effect, ofType, Actions} from '@ngrx/effects';

import {Store, select} from '@ngrx/store';
import { of } from 'rxjs';
import {switchMap, map, withLatestFrom, catchError, filter} from 'rxjs/operators';

import {IAppState} from '../state/app.state';

import {
  GetProduct,
  GetProductSuccess,
  GetProductError,
  GetProducts,
  GetProductsSuccess,
  GetProductsError,
  UpdateProduct,
  UpdateProductSuccess,
  UpdateProductError,
  RemoveProduct,
  RemoveProductSuccess,
  RemoveProductError, EProductActions, CreateProductSuccess, CreateProductError, CreateProduct,

} from '../actions/product.actions';
import {IProduct} from '../../interfaces/product.interface';
import {GetDataService} from '../../services/get-data.service';
import {IProductState} from '../state/product.state';
import {selectProductList, selectSelectedProduct} from '../selectors/product.selectors';
import {
    AuthUserError,
    AuthUserSuccess,
    EUserActions,
    UpdateUser,
    UpdateUserError,
    UpdateUserSuccess
} from '../actions/user.actions';
import {IUser} from '../../interfaces/user.interface';
import {NotificationsService} from '../../notifications/notifications.service';

@Injectable()
export class ProductEffects {
  @Effect()
  getProductStore$ = this.actions$.pipe(
    ofType<GetProduct>(EProductActions.GetProduct),
    map(action => action.payload),
    switchMap(id => {
      console.log(id);
      return this.getData.getProduct(id);
    }),
    switchMap((product: IProduct) => {
      return of(new GetProductSuccess(product));
    })
  );
  @Effect()
  getProducts$ = this.actions$.pipe(
    ofType<GetProducts>(EProductActions.GetProducts),
    switchMap(() => this.getData.getProducts()),
    switchMap((products: IProduct[]) => of(new GetProductsSuccess(products))),
  );
  @Effect()
  updateProduct$ = this.actions$.pipe(
      ofType<UpdateProduct>(EProductActions.UpdateProduct),
      switchMap((data) => {
        return this.getData.updateData(data, 'products').pipe(
            map((res: IProduct) => {
                this.notify.notify('Данные обновлены', 1, 2000);
                return new UpdateProductSuccess(res);
            }),
            catchError((err) => {
                this.notify.notify(err, 0, 2000);
                return of(new UpdateProductError(err));
            })
        );
      })
  );

  @Effect()
    createProduct$ = this.actions$.pipe(
        ofType<CreateProduct>(EProductActions.CreateProduct),
        switchMap((data) => {
            let filename;
            this.getData.uploadImage(data.payload.imageFile, 'products').subscribe(
                res => {
                    console.log(res);
                    filename = res;
                }
            );
            data.payload.image = filename;
            return this.getData.createData(data.payload, 'products').pipe(
                map((res: IProduct) => {
                    this.notify.notify(`Добавлен продукт${res.title}`, 1, 2000);
                    return new CreateProductSuccess(res);
                }),
                catchError((err) => {
                    this.notify.notify(err, 0, 2000);
                    return of(new CreateProductError(err));
                })
            );
        })
    );
  @Effect()
    removeProduct$ = this.actions$.pipe(
        ofType<RemoveProduct>(EProductActions.RemoveProduct),
        switchMap((data) => {
            console.dir(data)
            return this.getData.removeData(data.payload, 'products').pipe(
                map((res: IProduct) => {
                    this.notify.notify(`Продукт удален ${res.title}`, 1, 2000);
                    return new RemoveProductSuccess(res);
                }),
                catchError((err) => {
                    this.notify.notify(err, 0, 2000);
                    return of(new CreateProductError(err));
                })
            );
        })
    );
  constructor(
    private actions$: Actions,
    private getData: GetDataService,
    private store: Store<IProductState>,
    private notify: NotificationsService
  ) {
  }
}
