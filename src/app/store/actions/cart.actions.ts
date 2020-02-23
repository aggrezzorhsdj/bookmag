import {Action} from '@ngrx/store';
import {ICart} from '../../interfaces/cart.interface';

export enum ECartActions {
    GetCart = '[Cart] Get cart',
    GetCartSuccess = '[Cart] Get cart success',
    AddToCart = '[Cart] Add to cart',
    AddToCartSuccess = '[Cart] Add to cart success',
    RemoveFromCart = '[Cart] Remove from cart',
    RemoveFromCartSuccess = '[Cart] Remove from cart success',
    LoadInCartError = '[Cart] Load in cart error',
}

export class GetCart implements Action {
    public readonly type = ECartActions.GetCart;
}

export class GetCartSuccess implements Action {
    public readonly type = ECartActions.GetCartSuccess;
    constructor(public payload: ICart[]) {}
}

export class AddToCart implements Action {
    public readonly type = ECartActions.AddToCart;
    constructor(public payload: ICart) {}
}

export class AddToCartSuccess implements Action {
    public readonly type = ECartActions.AddToCartSuccess;
    constructor(public payload: ICart) {}
}

export class RemoveFromCart implements Action {
    public readonly type = ECartActions.RemoveFromCart;
    constructor(public payload: number) {}
}

export class RemoveFromCartSuccess implements Action {
    public readonly type = ECartActions.RemoveFromCartSuccess;
    constructor(public payload: ICart[]) {}
}

export class LoadCartInError implements Action {
    public readonly type = ECartActions.LoadInCartError;
    constructor(public payload: ICart) {}
}

export type CartActions = GetCart
| GetCartSuccess
| AddToCart
| AddToCartSuccess
| RemoveFromCart
| RemoveFromCartSuccess
| LoadCartInError;
