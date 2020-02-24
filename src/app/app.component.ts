import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'Bookmag';
  isLogin = false;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.isLogin = this.authService.logIn;
  }
  logOut() {
    this.authService.logout();
  }
}
