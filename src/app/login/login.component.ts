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
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.mainForm();
  }
  ngOnInit() {
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
    console.log(this.loginForm.valid);
    if (!this.loginForm.valid) {
      return false;
    } else {
      console.log(this.loginForm.get('login').value);
      this.authService.login(this.loginForm.get('login').value, this.loginForm.get('password').value)
        .subscribe((resp) => {
          this.router.navigate(['profile']);
          console.log(resp);
          localStorage.setItem('userId', resp.id);
          localStorage.setItem('auth_token', resp.token);
        })
        .unsubscribe();
    }
  }
}
