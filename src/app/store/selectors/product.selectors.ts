import {IAppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {IProductState} from '../state/product.state';
import {IProduct} from '../../interfaces/product.interface';

const selectProducts = (state: IAppState) => state.products;

export const selectProductList = createSelector(
    selectProducts,
    (state: IProductState) => state.products
)

export const selectProductCategoryList = createSelector(
    selectProducts,
    (state: IProductState) => state.products.reduce((arr, el) => {
        if (!arr.length || arr[arr.length - 1].category !== el.category) {
            arr.push(el);
        }
        console.log(arr);
        return arr;
    }, [])
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
