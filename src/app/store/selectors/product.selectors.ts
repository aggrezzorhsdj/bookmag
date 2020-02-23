import {IAppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {IProductState} from '../state/product.state';

const selectProducts = (state: IAppState) => state.products;

export const selectProductList = createSelector(
    selectProducts,
    (state: IProductState) => state.products
)

export const selectProductListWithCategory = (category: string) => createSelector(
    selectProducts,
    (state: IProductState) => state.products.filter(product => product.category === category)
)

export const selectProductListWithPrice = (sort: string) => createSelector(
    selectProducts,
    (state: IProductState) => state.products.sort((a, b) => {
        if (sort === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    })
)

export const selectSelectedProduct = createSelector(
    selectProducts,
  (state: IProductState) => state.selectedProduct
)
