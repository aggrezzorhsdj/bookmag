import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NotificationsModule} from './notifications/notifications.module';

const appRoute: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
  {path: 'books', loadChildren: './books/books.module#BooksModule'},
  {path: '**', component: PageNotFoundComponent},
];

const s = '';
@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoute),
        ReactiveFormsModule,
        NotificationsModule
    ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
