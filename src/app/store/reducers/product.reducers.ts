import {EProductActions, ProductActions} from '../actions/product.actions';
import {initialProductState, IProductState} from '../state/product.state';

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
    case EProductActions.RemoveProductSuccess: {
      return {
        ...state,
        selectedProduct: action.payload
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
