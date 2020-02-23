import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/state/app.state';
import {getCart} from '../store/selectors/cart.selectors';
import {GetCart, RemoveFromCart} from '../store/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  cart$;
  title = 'Корзина';
  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private store: Store<IAppState>
  ) { }
  getCart() {
    this.store.dispatch(new GetCart());
  }
  ngOnInit() {
    this.getCart();
    this.cart$ = this.store.select(getCart);
  }

  removeFromCart(id: number) {
    this.store.dispatch(new RemoveFromCart(id));
  }
}
