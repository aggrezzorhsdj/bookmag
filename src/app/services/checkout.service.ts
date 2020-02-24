import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {ICheckout} from '../interfaces/checkout.interface';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  url = '/api/';
  constructor(
      private http: HttpClient
  ) { }
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  sendMail(body) {
    let products = '';
    console.log(body);
    for (const product of body.products) {
      products += `<div>${product.title} ${product.price} руб. в количестве ${product.count}</div>`;
    }
    const template = `text`;
    const data = {
      name: body.name,
      email: body.email,
      subject: 'new order',
      text: `<h1>Привет! Вы заказали товар в магазине Bookmag</h1> ${products}`
    }
    console.log(`${this.url}mail/send`);
    return this.http.post('http://localhost:4000/api/mail/send', data).subscribe();
  }
  createOrder(checkout: ICheckout): Observable<ICheckout> {
    return this.http.post<ICheckout>(`${this.url}order/create`, checkout).pipe(
        catchError(this.errorMgmt)
    );
  }
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error}`;
    }
    return throwError(errorMessage);
  }
}
