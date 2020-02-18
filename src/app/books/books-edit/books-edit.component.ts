import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GetDataService} from '../../services/get-data.service';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../store/state/app.state';
import {ActivatedRoute, Router} from '@angular/router';
import {GetProduct, UpdateProduct} from '../../store/actions/product.actions';
import {selectSelectedProduct} from '../../store/selectors/product.selectors';
import {IUser} from '../../interfaces/user.interface';
import {UpdateUser} from '../../store/actions/user.actions';
import {IProduct} from '../../interfaces/product.interface';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.less']
})
export class BooksEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup = this.fb.group({
    article: ['', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_@\.]{2,20}$')]],
    title: ['', [Validators.required]],
    description: [''],
    category: ['', [Validators.required]],
    priceGroup: this.fb.group({
      price: ['', [Validators.required, Validators.pattern('^[0-9\.]{2,20}$')]],
      oldPrice: ['', [Validators.required, Validators.pattern('^[0-9\.]{2,20}$')]],
    }, {validator: this.priceMatcher}),
  });
  private priceMatcher(group: FormGroup) {
    const price = group.get('price').value;
    const oldPrice = group.get('oldPrice').value;
    if (price !== oldPrice) {
      return null;
    } else {
      return {
        isMatching: 'Старая и новая цена не должны совпадать'
      };
    }
  }
  constructor(
      private fb: FormBuilder,
      private getData: GetDataService,
      private store: Store<IAppState>,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetProduct(this.route.snapshot.params.id));
    this.readProduct();
  }
  get myForm() {
    return this.editForm.controls;
  }
  readProduct() {
    this.store.pipe(select(selectSelectedProduct)).subscribe(
        product => {
          if (product !== null) {
            this.editForm.patchValue({
              article: product.article,
              title: product.title,
              description: product.description,
              category: product.category,
              priceGroup: {
                price: product.price,
                oldPrice: product.old_price,
              },
            });
          }
        }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      const product: IProduct = {
        id: this.route.snapshot.params.id,
        article: this.editForm.get('article').value,
        title: this.editForm.get('title').value,
        description: this.editForm.get('description').value,
        category: this.editForm.get('category').value,
        price: this.editForm.get('priceGroup').get('price').value,
        old_price: this.editForm.get('priceGroup').get('oldPrice').value,
      };
      this.store.dispatch(new UpdateProduct(product));
    }
  }
}
