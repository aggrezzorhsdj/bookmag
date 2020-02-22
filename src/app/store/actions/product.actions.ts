import {Action} from '@ngrx/store';
import {IProduct} from '../../interfaces/product.interface';

export enum EProductActions {
  GetProducts = '[Products] Get products',
  GetProductsSuccess = '[Products] Get products success',
  GetProductsError = '[Products] Get products success',
  GetProduct = '[Product] Get product',
  GetProductSuccess = '[Product] Get product success',
  GetProductError = '[Product] Get product success',
  CreateProduct = '[Products] Create products',
  CreateProductSuccess = '[Products] Create products success',
  CreateProductError = '[Products] Create products success',
  UpdateProduct = '[Product] Update product',
  UpdateProductSuccess = '[Product] Update product success',
  UpdateProductError = '[Product] Update product success',
  RemoveProduct = '[Product] Remove product',
  RemoveProductSuccess = '[Product] Remove product success',
  RemoveProductError = '[Product] Remove product success',
}

export class GetProducts implements Action {
  public readonly type = EProductActions.GetProducts;
}

export class GetProductsSuccess implements Action {
  public readonly type = EProductActions.GetProductsSuccess;
  constructor(public payload: IProduct[]) {}
}

export class GetProductsError implements Action {
  public readonly type = EProductActions.GetProductsError;
  constructor(public payload: IProduct[]) {}
}

export class GetProduct implements Action {
  public readonly type = EProductActions.GetProduct;
  constructor(public payload: string) {}
}

export class GetProductSuccess implements Action {
  public readonly type = EProductActions.GetProductSuccess;
  constructor(public payload: IProduct) {}
}

export class GetProductError implements Action {
  public readonly type = EProductActions.GetProductError;
  constructor(public payload: IProduct) {}
}

export class CreateProduct implements Action {
  constructor(public payload: IProduct) {}
  public readonly type = EProductActions.CreateProduct;
}

export class CreateProductSuccess implements Action {
  public readonly type = EProductActions.CreateProductSuccess;
  constructor(public payload: IProduct) {}
}

export class CreateProductError implements Action {
  public readonly type = EProductActions.CreateProductError;
  constructor(public payload: IProduct) {}
}


export class UpdateProduct implements Action {
  constructor(public payload: IProduct) {}
  public readonly type = EProductActions.UpdateProduct;
}

export class UpdateProductSuccess implements Action {
  public readonly type = EProductActions.UpdateProductSuccess;
  constructor(public payload: IProduct) {}
}

export class UpdateProductError implements Action {
  public readonly type = EProductActions.UpdateProductError;
  constructor(public payload: IProduct) {}
}

export class RemoveProduct implements Action {
  constructor(public payload: string) {}
  public readonly type = EProductActions.RemoveProduct;
}

export class RemoveProductSuccess implements Action {
  public readonly type = EProductActions.RemoveProductSuccess;
  constructor(public payload: IProduct) {}
}

export class RemoveProductError implements Action {
  public readonly type = EProductActions.RemoveProductError;
  constructor(public payload: IProduct) {}
}


export type ProductActions = GetProducts
| GetProductsSuccess
| GetProductsError
| GetProduct
| GetProductSuccess
| GetProductError
| CreateProduct
| CreateProductSuccess
| CreateProductError
| RemoveProduct
| RemoveProductSuccess
| RemoveProductError;
