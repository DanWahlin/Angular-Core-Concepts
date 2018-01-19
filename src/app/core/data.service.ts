import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ICustomer, IOrder } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/';
    
    constructor(private http: Http) { }

    getCustomers() : Observable<ICustomer[]> {
      return this.http.get(this.baseUrl + 'customers.json')
                  .map((res: Response) => res.json())
                  .catch(this.handleError);
    }

    getCustomer(id: number) : Observable<ICustomer> {
      return this.http.get(this.baseUrl + 'customers.json')
            .map((res: Response) => {
              let customer = res.json().filter((cust: ICustomer) => cust.id === id);
              return (customer && customer.length) ? customer[0] : null;
            })
            .catch(this.handleError);
    }

    getOrders(id: number) : Observable<IOrder[]> {
      return this.http.get(this.baseUrl + 'orders.json')
                  .map((res: Response) => {
                    let orders = res.json().filter((order: IOrder) => order.customerId === id);
                    return orders;
                  })
                  .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }

}