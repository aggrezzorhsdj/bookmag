import {ICheckoutState, initialCheckoutState} from '../state/checkout.state';
import {CheckoutActions, ECheckoutActions} from '../actions/checkout.actions';

export const checkoutReducers = (
    state = initialCheckoutState,
    action: CheckoutActions
): ICheckoutState => {
    switch (action.type) {
        case ECheckoutActions.CreateCheckoutSuccess : {
            return {
                ...state,
                order: action.payload
            };
        }
        case ECheckoutActions.CreateCheckoutError : {
            return {
                ...state,
                error: action.payload
            };
        }
        default:
            return state;
    }
}