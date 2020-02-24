import {ICart} from './cart.interface';

export class ICheckout {
    name: string;
    address: string;
    email: string;
    products: {title: string; count: number, price: number}[];
    summary: number;
}
