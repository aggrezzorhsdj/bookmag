import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { AuthService } from './services/auth.service';
import {faShoppingBasket, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'Bookmag';
  isLogin = false;
  faShoppingCart = faShoppingBasket;
  faUser = faUser;
  constructor(private authService: AuthService) { }
  ngOnInit() {
  }
  logOut() {
    this.authService.logout();
  }
}
