import {ProductActions, EProductActions} from '../actions/product.actions';
import {IProductState, initialProductState} from '../state/product.state';

export const productReducers = (
  state = initialProductState,
  action: ProductActions
): IProductState => {
  switch (action.type) {
    case EProductActions.GetProductsSuccess: {
      return {
        ...state,
        products: action.payload
      };
    }
    case EProductActions.GetProductSuccess: {
      return {
        ...state,
        selectedProduct: action.payload
      };
    }
    default:
      return state;
  }
};
