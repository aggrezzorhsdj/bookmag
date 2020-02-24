import {ICheckout} from '../../interfaces/checkout.interface';

export interface ICheckoutState {
    order: ICheckout;
    error: string;
}

export const initialCheckoutState: ICheckoutState = {
    order: null,
    error: null
}
