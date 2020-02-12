import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from '../main/main.component';
import {LoginComponent} from '../login/login.component';
import {ProfileComponent} from '../profile/profile.component';
import {BooksComponent} from '../books/books.component';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';
import {BookseditComponent} from '../booksedit/booksedit.component';
import {BooksaddComponent} from '../booksadd/booksadd.component';

const appRoute: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'books', component: BooksComponent},
  {path: 'books/edit/:id', component: BookseditComponent},
  {path: 'books/add', component: BooksaddComponent},
  {path: '**', component: PagenotfoundComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
