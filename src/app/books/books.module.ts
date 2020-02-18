import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import {BooksRoutingModule} from './books-routing.module';
import {BooksEditComponent} from './books-edit/books-edit.component';
import {BooksAddComponent} from './books-add/books-add.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    BooksComponent,
    BooksEditComponent,
    BooksAddComponent
  ],
    imports: [
        CommonModule,
        BooksRoutingModule,
        ReactiveFormsModule
    ],
})
export class BooksModule { }
