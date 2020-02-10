import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.mainForm();
  }
  ngOnInit() {
  }
  mainForm() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.required, Validators.pattern('[a-z0-9._%+-]')],
    });
  }
  passwordValidator(group: FormGroup) {
    let match = false;
    if (group.controls.password === group.controls.repeatPassword) {
      match = true;
    }
    if (match) {
      return null;
    } else {
      return {
        mismatch: true
      };
    }
  }
  get myForm() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      return false;
    } else {
      //
    }
  }
}
