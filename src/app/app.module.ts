import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MainComponent} from './main/main.component';
import {BooksComponent} from './books/books.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { BookseditComponent } from './profile/booksedit/booksedit.component';
import { BooksaddComponent } from './profile/booksadd/booksadd.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProfileeditComponent } from './profile/profileedit/profileedit.component';
import { DesctooltipComponent } from './desctooltip/desctooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BooksComponent,
    ProfileComponent,
    LoginComponent,
    PagenotfoundComponent,
    BookseditComponent,
    BooksaddComponent,
    ProfileeditComponent,
    DesctooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
