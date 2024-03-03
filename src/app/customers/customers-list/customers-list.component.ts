import { Component, Input, inject } from '@angular/core';

import { Customer } from '../../shared/interfaces';
import { SorterService } from '../../core/sorter.service';
import { FilterTextboxComponent } from './filter-textbox.component';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CapitalizePipe } from '../../shared/capitalize.pipe';

@Component({
    selector: 'app-customers-list',
    standalone: true,
    imports: [ CurrencyPipe, CapitalizePipe, FilterTextboxComponent, RouterLink ],
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent {
    private _customers: Customer[] = [];
    @Input() get customers(): Customer[] {
        return this._customers;
    }
    set customers(value: Customer[]) {
        if (value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }
    filteredCustomers: Customer[] = [];
    customersOrderTotal = 0;
    currencyCode = 'USD';
    sorterService: SorterService = inject(SorterService);

    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: Customer) => {
            this.customersOrderTotal += cust.orderTotal!;
        });
    }

    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: Customer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.orderTotal!.toString().indexOf(data) > -1;
            });
        } else {
            this.filteredCustomers = this.customers;
        }
        this.calculateOrders();
    }

    sort(prop: string) {
        this.sorterService.sort(this.filteredCustomers, prop);
    }

    customerTrackBy(index: number, customer: Customer) {
        return customer.id;
    }

}
