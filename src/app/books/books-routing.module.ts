import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './books.component';


const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: '/books-edit/:id', loadChildren: './books-edit.module#BooksEditModule'},
  {path: '/books-add', loadChildren: './books-add.module#BooksAddModule'},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
