import { Injectable } from '@angular/core';
import {IProduct} from '../interfaces/product.interface';
import {Observable, of} from 'rxjs';
import {ICart} from '../interfaces/cart.interface';
import {error} from 'util';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ICart[] = [];
  addToCart(product): Observable<ICart> {
    const arr: ICart[] = [];
    const existing = localStorage.getItem('cart');
    let isExist = false;
    if (existing !== null) {
      const obj = JSON.parse(existing);
      for (const i of obj) {
        if (i.product._id === product.product._id) {
          isExist = true;
        }
      }
      if (!isExist) {
        obj.push(product);
      } else {
        obj.map(value => {
          console.log(value.product);
          console.log(product.product);
          return value.product._id === product.product._id ? value.count++ : value.count;
        });
      }
      localStorage.setItem('cart', JSON.stringify(obj));
    } else {
      arr.push(product);
      localStorage.setItem('cart', JSON.stringify(arr));
    }
    return of(product);
  }

  getItems(): Observable<ICart[]> {
    const items = JSON.parse(localStorage.getItem('cart'));
    return of(items);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() { }

  removeFromCart(id: number): Observable<ICart[]> {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.splice(id, 1);
    localStorage.setItem('cart', JSON.stringify(newCart));
    return of(newCart);
  }
}
