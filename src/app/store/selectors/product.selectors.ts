import {IAppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {IProductState} from '../state/product.state';

const selectProducts = (state: IAppState) => state.products;

export const selectProductList = createSelector(
    selectProducts,
    (state: IProductState) => state.products
)

export const selectSelectedProduct = (id: string) => createSelector(
    selectProducts,
  (state: IProductState) => state.products.map(product => product[id])
)
