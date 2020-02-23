import {ICart} from '../../interfaces/cart.interface';

export interface ICartState {
    products: ICart[];
}
export const initialCartState: ICartState = {
    products: null,
}
