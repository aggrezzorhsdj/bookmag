import {Action} from '@ngrx/store';
import {ICheckout} from '../../interfaces/checkout.interface';

export enum ECheckoutActions {
    CreateCheckout = '[Checkout] Create checkout',
    CreateCheckoutSuccess = '[Checkout] Create checkout success',
    CreateCheckoutError = '[Checkout] Create checkout error',
}

export class CreateCheckout implements Action {
    public readonly  type = ECheckoutActions.CreateCheckout;
    constructor(public payload: ICheckout) {}
}

export class CreateCheckoutSuccess implements Action {
    public readonly  type = ECheckoutActions.CreateCheckoutSuccess;
    constructor(public payload: ICheckout) {}
}

export class CreateCheckoutError implements Action {
    public readonly  type = ECheckoutActions.CreateCheckoutError;
    constructor(public payload: string) {}
}

export type CheckoutActions = CreateCheckout | CreateCheckoutSuccess | CreateCheckoutError;
