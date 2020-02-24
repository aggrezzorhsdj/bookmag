import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IAppState} from '../store/state/app.state';
import {select, Store} from '@ngrx/store';
import {
  selectProductList,
  selectProductListWithCategory,
  selectProductListWithPrice
} from '../store/selectors/product.selectors';
import {GetProducts} from '../store/actions/product.actions';
import {ICart} from '../interfaces/cart.interface';
import {IProduct} from '../interfaces/product.interface';
import {AddToCart} from '../store/actions/cart.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  title = 'Каталог продукции';
  assetsUrl = '/images/'
  products$;
  currency = '₽';
  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private store: Store<IAppState>
  ) {}
  getProducts() {
    this.products$ = this.store.pipe(select(selectProductList));
  }
  getProductsOnCategory(event) {
    const category = event.target.value;
    if (category !== 'default') {
      this.products$ = this.store.pipe(select(selectProductListWithCategory(category)));
    } else {
      this.products$ = this.store.pipe(select(selectProductList));
    }
  }
  getProductsOnPrice(event) {
    const sortDirection = event.target.value;
    this.products$ = this.store.pipe(select(selectProductListWithPrice(sortDirection)));
  }
  navigateDetail(id: string) {
    this.router.navigate(['/products', id]);
  }
  ngOnInit() {
    this.store.dispatch(new GetProducts());
    this.getProducts();
  }

  addToCart(product: IProduct, count: number) {
    const cartProduct: ICart = {
      product,
      count
    };
    this.store.dispatch(new AddToCart(cartProduct));
  }
}
