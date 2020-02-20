import {Component, Input} from '@angular/core';
import { NotificationsService} from './notifications.service';
import { Notifier } from './notifier';
import { notifyAnimation } from './animations';
import {faCheck, faInfo, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.less'],
  animations: [
    notifyAnimation,
  ]
})
export class NotificationsComponent {
  @Input()
  show: false;

  faClose = faTimes;
  faCheck = faCheck;
  faVoid = faInfo;
  get src(): Notifier {
    return this.notifierService.notifications;
  }

  constructor(
      private notifierService: NotificationsService
  ) { }
}