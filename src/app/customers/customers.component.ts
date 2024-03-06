import { Component, inject } from '@angular/core';

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
export class CustomersComponent {
    title = 'Customers';
    dataService: DataService = inject(DataService);
    people$: Observable<Customer[]> = this.dataService.getCustomers();
}
