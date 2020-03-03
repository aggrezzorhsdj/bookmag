import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {IUser} from '../interfaces/user.interface';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = environment.apiUrl;
  token: string;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(
      private http: HttpClient,
      private router: Router
  ) { }
  login(data): Observable<IUser> {
    return this.http.post<IUser>(`${this.api}/users/authenticate`, data).pipe(
        map(
            res => {
              localStorage.setItem('token', res.token);
              localStorage.setItem('userId', res.id);
              this.router.navigate(['profile']);
              return res;
            }
        ),
        catchError(err => this.handleError(err))
    );
  }
  getUsers(): Observable<IUser> {
    return this.http.get<IUser>(this.api + '/users');
  }
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
    private handleError(err) {
        if (typeof err !== undefined) {
            return throwError(err.error.errorMessage);
        }
    }
}
