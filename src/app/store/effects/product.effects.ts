import {Injectable} from '@angular/core';
import { Effect, ofType, Actions} from '@ngrx/effects';

import {Store, select} from '@ngrx/store';

import { of } from 'rxjs';
import {switchMap, map, withLatestFrom, catchError} from 'rxjs/operators';

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
  RemoveProductError, EProductActions, CreateProductSuccess, CreateProductError,

} from '../actions/product.actions';
import {IProduct} from '../../interfaces/product.interface';
import {GetDataService} from '../../services/get-data.service';
import {IProductState} from '../state/product.state';
import {selectProductList} from '../selectors/product.selectors';
import {EUserActions, UpdateUser, UpdateUserError, UpdateUserSuccess} from '../actions/user.actions';
import {IUser} from '../../interfaces/user.interface';

@Injectable()
export class ProductEffects {
  @Effect()
  getProduct$ = this.actions$.pipe(
      ofType<GetProduct>(EProductActions.GetProduct),
      switchMap(action =>
        this.getData.getProduct(action.payload).pipe(
            map(product => new GetProductSuccess(product))
        )
      ),
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
            map((res: IProduct) => new UpdateProductSuccess(res)),
            catchError(error => of(new UpdateProductError(error)))
        );
      })
  );

  @Effect()
  createProduct$ = this.actions$.pipe(
      ofType<UpdateProduct>(EProductActions.CreateProduct),
      switchMap((data) => {
        return this.getData.createData(data.payload, 'products').pipe(
            map((res: IProduct) => new CreateProductSuccess(res)),
            catchError(error => of(new CreateProductError(error)))
        );
      })
  );
  constructor(
    private actions$: Actions,
    private getData: GetDataService,
    private store: Store<IProductState>
  ) {
  }
}
