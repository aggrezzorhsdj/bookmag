import { Component, OnInit } from '@angular/core';
import {IAppState} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {selectSelectedProduct} from '../../store/selectors/product.selectors';
import {GetProduct} from '../../store/actions/product.actions';
import {AddToCart} from '../../store/actions/cart.actions';
import {ICart} from '../../interfaces/cart.interface';
import {IProduct} from '../../interfaces/product.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  product$;
  currency = '₽';
  assetsUrl = '/images/'
  constructor(
      private store: Store<IAppState>,
      private router: Router,
      private route: ActivatedRoute
  ) {
    this.store.dispatch(new GetProduct(this.route.snapshot.params.id));
    this.getProduct();
  }
  getProduct() {
    this.product$ = this.store.select(selectSelectedProduct);
  }
  ngOnInit() {
  }

  addToCart(product: IProduct, count: number) {
    const cartProduct: ICart = {
      product,
      count
    };
    this.store.dispatch(new AddToCart(cartProduct));
  }
}
