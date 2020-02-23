import {ICartState, initialCartState} from '../state/cart.state';
import {CartActions, ECartActions} from '../actions/cart.actions';

export const cartReducers = (
    state = initialCartState,
    action: CartActions
): ICartState => {
    switch (action.type) {
        case ECartActions.GetCartSuccess: {
            return {
                ...state,
                products: action.payload
            };
        }
        case ECartActions.RemoveFromCartSuccess: {
            return {
                ...state,
                products: action.payload
            };
        }
        default:
            return state;
    }
};