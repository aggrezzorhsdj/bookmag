import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../store/state/app.state';
import {AuthUser} from '../store/actions/user.actions';
import {getError, selectSelectedUser} from '../store/selectors/user.selectors';
import {NotificationsService} from '../notifications/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  error = null;
  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private store: Store<IAppState>,
      private notify: NotificationsService,
      private changeDet: ChangeDetectorRef
  ) {
  }
  ngOnInit() {
    this.mainForm();
    this.store.pipe(select(getError)).subscribe(
        err => {
          if (err !== null) {
            console.log(err);
            this.error = err;
          }
        }
    );
    this.store.pipe(select(selectSelectedUser));
  }
  mainForm() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_@\.]{2,20}$')
        ]
      ],
    });
  }
  get myForm() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      return false;
    } else {
      const data = {
        login: this.loginForm.get('login').value,
        password: this.loginForm.get('password').value
      };
      this.store.dispatch(new AuthUser(data));
    }
  }
}
