import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {GetDataService} from './services/getdata.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
