import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {IUser} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  api = 'http://localhost:4000/api';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  userId: string = localStorage.getItem('userId');
  token: string = localStorage.getItem('auth_token');
  constructor(private http: HttpClient, private router: Router) {}
  getUser(id): Observable<IUser> {
    console.log(id.payload);
    const url = `${this.api}/users/read/${id.payload}`;
    return this.http.get<IUser>(url, {headers: this.headers}).pipe(
      catchError(this.errorMgmt)
    );
  }
  updateUser(data): Observable<IUser> {
    const url = `${this.api}/users/update/${data.id}`;
    return this.http.post<IUser>(url, data);
  }
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
