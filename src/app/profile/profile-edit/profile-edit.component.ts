import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {IAppState} from '../../store/state/app.state';
import {select, Store} from '@ngrx/store';
import {selectSelectedUser} from '../../store/selectors/user.selectors';
import {IUser} from '../../interfaces/user.interface';
import {GetUser, UpdateUser} from '../../store/actions/user.actions';
import {NotificationsService} from '../../notifications/notifications.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.less'],
})
export class ProfileEditComponent implements OnInit {
  userId: string = localStorage.getItem('userId');
  userData: User;
  userEditForm: FormGroup = this.fb.group({
    login: ['', [Validators.required]],
    email: ['', [Validators.required]],
    passwordGroup: this.fb.group({
      password: ['',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_@\.]{2,20}$')
        ]
      ],
      repeatPassword: ['',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_@\.]{2,20}$')
        ]
      ],
    }, {validator: this.passwordMatcher})
  });
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private getData: GetDataService,
    private store: Store<IAppState>,
    private router: Router,
    private notify: NotificationsService
  ) {}
  passwordMatcher(group: FormGroup) {
    const password = group.get('password').value;
    const repeatPassword = group.get('repeatPassword').value;
    if (password === repeatPassword) {
      return null;
    } else {
      return {
        notMatch: 'Пароли не совпадают'
      };
    }
  }
  mainForm() {
    this.getData.getUser(this.userId)
      .subscribe((data) => {
        this.userData = {
          id: data.id,
          login: data.login,
          email: data.email,
          password: data.password,
        };
      });
  }
  get myForm() {
    return this.userEditForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.userEditForm.valid) {
      return false;
    } else {
      const data: IUser = {
        id: this.userId,
        login: this.userEditForm.get('login').value,
        email: this.userEditForm.get('email').value,
        password: this.userEditForm.get('passwordGroup').get('password').value,
      };
      console.log(data);
      this.store.dispatch(new UpdateUser(data));
      this.notify.notify('Данные обновлены', 1);
    }
  }
  ngOnInit() {
    this.store.dispatch(new GetUser(this.userId));
    this.readUser();
  }
  readUser() {
    this.store.pipe<IUser>(select(selectSelectedUser)).subscribe(
      user => {
        console.dir(user);
        if (user !== null) {
          this.userEditForm.patchValue({
            login: user.login,
            email: user.email,
            passwordGroup: {
              password: user.password,
              repeatPassword: user.password,
            }
          });
        }
      }
    );
  }
}
