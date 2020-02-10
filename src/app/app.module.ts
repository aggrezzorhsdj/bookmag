import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';

import {MainComponent} from './main/main.component';
import {BooksComponent} from './books/books.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { BookseditComponent } from './booksedit/booksedit.component';
import { BooksaddComponent } from './booksadd/booksadd.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BooksComponent,
    ProfileComponent,
    LoginComponent,
    PagenotfoundComponent,
    BookseditComponent,
    BooksaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
