import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {appReducers} from './store/reducers/app.reducers';
import {UserEffects} from './store/effects/user.effects';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {GetDataService} from './services/get-data.service';
import {ProductEffects} from "./store/effects/product.effects";


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
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ProductEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    StoreDevtoolsModule.instrument()
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
