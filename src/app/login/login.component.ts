import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.mainForm();
  }
  ngOnInit() {
  }
  mainForm() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['',
        [
          Validators.required
        ]
      ],
    });
  }
  // passwordValidator(group: FormGroup) {
  //   let match = false;
  //   if (group.controls.password === group.controls.repeatPassword) {
  //     match = true;
  //   }
  //   if (match) {
  //     return null;
  //   } else {
  //     return {
  //       mismatch: true
  //     };
  //   }
  // }
  get myForm() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.valid);
    if (!this.loginForm.valid) {
      return false;
    } else {
      console.log(this.loginForm.get('login').value);
      this.authService.login(this.loginForm.get('login').value, this.loginForm.get('password').value);
    }
  }
}
