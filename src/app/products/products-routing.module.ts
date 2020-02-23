import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

import {CategoriesComponent} from './categories/categories.component';
import {DetailComponent} from './detail/detail.component';
import {ProductsComponent} from './products.component';

const routes = [
  {path: '', component: ProductsComponent, pathMatch: 'full'},
  {path: ':category', data: { breadcrumb: 'Категория' }, component: CategoriesComponent},
  {path: ':id', data: { breadcrumb: 'Описание' }, component: DetailComponent},
];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
