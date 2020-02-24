import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {ICheckout} from '../interfaces/checkout.interface';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  url = 'http://localhost:4000/api/';
  constructor(
      private http: HttpClient
  ) { }

  sendMail(body) {
    let products = '';
    for (const product of body.products) {
      products += `${product.article} ${product.title} ${product.price} of count ${product.count}<br>`;
    }
    const template = `
      <div>Hello ${body.name}. You chekout new order on site bookmag.</div>
      <div>${products}</div>
    `;
    const data = {
      name: body.name,
      email: body.email,
      subject: 'new order',
      text: template
    }
    return this.http.post(`${this.url}mail/send`, data).pipe(
        catchError(this.errorMgmt)
    );
  }
  createOrder(checkout: ICheckout): Observable<ICheckout> {
    return this.http.post<ICheckout>(`${this.url}order/send`, checkout).pipe(
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
