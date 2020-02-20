import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationsComponent } from './notifications.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    NotificationsComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  exports: [
    NotificationsComponent,
  ]
})
export class NotificationsModule {}

