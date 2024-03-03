import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Customer, Order } from '../../app/shared/interfaces';

@Injectable({ providedIn: 'root' })
export class DataService {
    // Use the following properties if running the Docker containers via Docker Compose
    // customersUrl = 'http://localhost:3000/api/customers';
    // ordersUrl = 'http://localhost:3000/api/orders';

    // Use the following properties if running the app stand-alone with no external dependencies
    customersUrl = 'assets/customers.json';
    ordersUrl = 'assets/orders.json';

    constructor(private http: HttpClient) { }

    getCustomers(): Observable<Customer[]> {
      return this.http.get<Customer[]>(this.customersUrl)
        .pipe(
          catchError(this.handleError)
        );

    }

    getCustomer(id: number): Observable<Customer> {
      return this.http.get<Customer[]>(this.customersUrl)
        .pipe(
          map(customers => {
            const customer = customers.filter((cust: Customer) => cust.id === id);
            return (customer && customer.length) ? customer[0] : {} as Customer;
          }),
          catchError(this.handleError)
        );
    }

    getOrders(id: number): Observable<Order[]> {
      return this.http.get<Order[]>(this.ordersUrl)
        .pipe(
          map(orders => {
            const custOrders = orders.filter((order: Order) => order.customerId === id);
            return custOrders;
          }),
          catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return throwError(() => errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return throwError(() => error || 'Node.js server error');
  }

}
