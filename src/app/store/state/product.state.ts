import {IProduct} from '../../interfaces/product.interface';

export interface IProductState {
  products: IProduct[];
  categories: string[];
  selectedProduct: IProduct;
}
export const initialProductState: IProductState = {
  products: null,
  categories: null,
  selectedProduct: null
}
