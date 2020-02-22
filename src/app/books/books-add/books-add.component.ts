import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GetDataService} from '../../services/get-data.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/state/app.state';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../../interfaces/product.interface';
import {CreateProduct} from '../../store/actions/product.actions';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.less']
})
export class BooksAddComponent implements OnInit {
  submitted = false;
  public addForm: FormGroup = this.fb.group({
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
  get myForm() {
    return this.addForm.controls;
  }
  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    if (!this.addForm.valid) {
      return false;
    } else {
      const product: IProduct = {
        article: this.addForm.get('article').value,
        title: this.addForm.get('title').value,
        description: this.addForm.get('description').value,
        category: this.addForm.get('category').value,
        price: this.addForm.get('priceGroup').get('price').value,
        old_price: this.addForm.get('priceGroup').get('oldPrice').value,
      };
      console.log(product);
      this.store.dispatch(new CreateProduct(product));
    }
  }

}
