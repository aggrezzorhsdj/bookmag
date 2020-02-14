import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './books.component';
import {BooksEditComponent} from './books-edit/books-edit.component';
import {BooksAddComponent} from './books-add/books-add.component';


const routes: Routes = [
  {path: '', component: BooksComponent, pathMatch: 'full'},
  {path: 'books-edit/:id', component: BooksEditComponent},
  {path: 'books-add', component: BooksAddComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
