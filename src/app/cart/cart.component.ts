import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/state/app.state';
import {getCart} from '../store/selectors/cart.selectors';
import {GetCart, RemoveFromCart} from '../store/actions/cart.actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {catchError, map} from 'rxjs/operators';
import {CreateCheckout} from '../store/actions/checkout.actions';
import {ICheckout} from '../interfaces/checkout.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  cart$;
  title = 'Корзина';
  submitted = false;
  form: FormGroup;
  constructor(
      private router: Router,
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private store: Store<IAppState>
  ) { }
  getCart() {
    this.store.dispatch(new GetCart());
  }
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    })
    this.getCart();
    this.cart$ = this.store.select(getCart);
  }
  onSubmit() {
    this.submitted = true;
    if (!this.form.valid) {
      return false;
    } else {
      this.store.select(getCart).subscribe(
          data => {
            const order: ICheckout = {
              name: this.form.get('name').value,
              address: this.form.get('address').value,
              email: this.form.get('email').value,
              products: data.map(value => {
                return {title: value.product.title, count: value.count, price: value.product.price};
              }),
              summary: data.map(value => value.product.price).reduce((val, current) => val + current)
            };
            this.store.dispatch(new CreateCheckout(order));
          },
          err => err
      )
          .unsubscribe();
    }
  }
  get myForm() {
    return this.form.controls;
  }
  removeFromCart(id: number) {
    this.store.dispatch(new RemoveFromCart(id));
  }
}
