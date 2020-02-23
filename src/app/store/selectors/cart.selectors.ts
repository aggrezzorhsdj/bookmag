import {IAppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {ICartState} from '../state/cart.state';


const cart = (state: IAppState) => state.cart;

export const getCart = createSelector(
    cart,
    (state: ICartState) => state.products
)
