import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../../services/getdata.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.less']
})
export class ProfileEditComponent implements OnInit {
  userId: string = localStorage.getItem('userId');
  userData: User;
  userUpdate: User;
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
  constructor(private fb: FormBuilder, private authService: AuthService, private getData: GetDataService, private router: Router) {
    this.readUser();
  }
  passwordMatcher(group: FormGroup) {
    const password = group.get('password').value;
    const repeatPassword = group.get('repeatPassword').value;
    console.log(password);
    console.log(repeatPassword);
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
    console.log(this.userEditForm.valid);
    if (!this.userEditForm.valid) {
      return false;
    } else {
      const data = {
        id: this.userId,
        login: this.userEditForm.get('login').value,
        email: this.userEditForm.get('email').value,
        password: this.userEditForm.get('passwordGroup').get('password').value,
      }
      this.getData.updateUser(this.userId, data);
    }
  }
  ngOnInit() {
  }
  readUser() {
    this.getData.getUser(this.userId)
      .subscribe((data) => {
        this.userData = {
          id: data.id,
          login: data.login,
          email: data.email,
          password: data.password,
        };
        this.userEditForm.patchValue({
          login: this.userData.login,
          email: this.userData.email,
          passwordGroup: {
            password: this.userData.password,
            repeatPassword: this.userData.password,
          }
        });
      });
  }
  updateUser() {
    this.getData.updateUser(this.userId, this.userUpdate);
  }
}
