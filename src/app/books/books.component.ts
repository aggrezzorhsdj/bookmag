import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../store/state/app.state';
import {Router} from '@angular/router';
import {GetProducts, RemoveProduct} from '../store/actions/product.actions';
import {
  selectProductCategoryList,
  selectProductList,
  selectProductListWithCategory, selectProductListWithPrice,
  selectSelectedProduct
} from '../store/selectors/product.selectors';
import {IProduct} from '../interfaces/product.interface';
import {IProductHttp} from '../interfaces/user-http.interface';
import {CheckboxItem} from '../checkbox/checkbox-item';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {
  title = 'Книги';
  products$;
  categories$;
  categoriesOptions = new Array<CheckboxItem>();
  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetProducts());
    this.getProducts();
  }

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
  navigateEdit(id: string) {
    this.router.navigate(['/books/edit', id]);
  }
  getProductCategories() {
    this.categories$ = this.store.pipe(select(selectProductCategoryList));
  }

    remove(id: string) {
      console.log(`id from books component ${id}`);
      this.store.dispatch(new RemoveProduct(id));
    }
}
