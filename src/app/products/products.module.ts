import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from './products-routing.module';
import {CategoriesComponent} from './categories/categories.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
      ProductsComponent,
      CategoriesComponent,
      DetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
})
export class ProductsModule { }
