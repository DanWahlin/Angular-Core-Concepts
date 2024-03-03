import { Component, OnInit, inject } from '@angular/core';

import { Customer } from '../shared/interfaces';
import { DataService } from '../core/data.service';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { CustomersListComponent } from './customers-list/customers-list.component';

@Component({
    selector: 'app-customers',
    standalone: true,
    imports: [ CommonModule, CustomersListComponent ],
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
    title = 'Customers';
    people$: Observable<Customer[]> = of([]);
    dataService: DataService = inject(DataService);

    ngOnInit() {
      this.people$ = this.dataService.getCustomers();

      // this.people = [
      //     { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
      //     { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
      //     { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
      //     { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
      // ];
    }

}
