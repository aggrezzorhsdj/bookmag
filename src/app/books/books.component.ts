import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../store/state/app.state';
import {Router} from '@angular/router';
import {GetProducts} from '../store/actions/product.actions';
import {selectProductList, selectSelectedProduct} from '../store/selectors/product.selectors';
import {IProduct} from '../interfaces/product.interface';
import {IProductHttp} from '../interfaces/user-http.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {
  title = 'Книги';
  products;
  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetProducts());
    this.getProducts();
  }

  getProducts() {
    this.store.pipe(select(selectProductList)).subscribe(
        products => {
          this.products = products;
        }
    );
  }

  navigateEdit(id: string) {
    this.router.navigate(['/books/edit', id]);
  }
}
