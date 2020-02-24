import {ICart} from './cart.interface';

export class ICheckout {
    name: string;
    address: string;
    email: string;
    products: ICart[];
}
