import { Injectable } from '@angular/core';
import {Notifier} from './notifier';
import {NotifyType} from './notify-type';
import {Notification} from './notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  public notifications = new Notifier();
  constructor() { }
  public notify(message: string, type: NotifyType, duration: number = 8000): void {
    const notification = new Notification(message, type);

    const dismissWait = () => {
      new Promise<void>((resolve) => setTimeout(resolve, duration)).then(() => {
        this.notifications.destroy(notification);
      });
    };

    this.notifications.add(notification);

    dismissWait();
  }
}
