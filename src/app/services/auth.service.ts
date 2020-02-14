import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import { User } from '../models/user';
import {UserLogin} from '../models/user-login';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = 'http://localhost:4000/api';
  token: string;
  constructor(private http: HttpClient, private router: Router) { }
  login(login: string, password: string): Observable<UserLogin> {
    return this.http.post<UserLogin>(this.api + '/users/authenticate', {login, password});
  }
  public logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('userId');
  }
  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }
}
