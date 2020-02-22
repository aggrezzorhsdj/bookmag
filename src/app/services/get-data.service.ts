import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {IUser} from '../interfaces/user.interface';
import {IProduct} from "../interfaces/product.interface";
import {IProductHttp} from "../interfaces/user-http.interface";

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

    const url = `${this.api}/users/read/${id.payload}`;
    return this.http.get<IUser>(url, {headers: this.headers}).pipe(
      catchError(this.errorMgmt)
    );
  }
  updateData(data, entity) {
    const url = `${this.api}/${entity}/update/${data.payload.id}`;
    return this.http.post(url, data.payload).pipe(
      map((res) => res),
      catchError(this.errorMgmt)
    );
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
  getProduct(id): Observable<IProduct> {
    const url = `${this.api}/products/read/${id}`;
    return this.http.get<IProduct>(url, {headers: this.headers}).pipe(
        catchError(this.errorMgmt)
    );
  }
  getProducts(): Observable<IProduct[]> {
    const url = `${this.api}/products`;
    return this.http.get<IProduct[]>(url, {headers: this.headers}).pipe(
      catchError(this.errorMgmt)
    );
  }

  createData(data: IProduct, entity: string) {
    const url = `${this.api}/${entity}/create/`;
    return this.http.post(url, data).pipe(
        catchError(this.errorMgmt)
    );
  }
  removeData(id: string, entity: string) {
    const url = `${this.api}/${entity}/delete/${id}`;
    return this.http.delete(url).pipe(
        catchError(this.errorMgmt)
    );
  }
  uploadImage(file, entity): Observable<string> {
    const url = `${this.api}/${entity}/upload`;
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<string>(url, formData);
  }
}
