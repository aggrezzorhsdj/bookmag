import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = 'http://localhost:4000/api';
  token: string;
  constructor(private http: HttpClient, private router: Router) { }
  login(login: string, password: string) {
    this.http.post(this.api + '/users/authenticate', {login, password})
      .subscribe((resp: any) => {
        this.router.navigate(['profile']);
        localStorage.setItem('auth_token', resp.token);
      });
  }
  public logout() {
    localStorage.removeItem('token');
  }
  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }
}