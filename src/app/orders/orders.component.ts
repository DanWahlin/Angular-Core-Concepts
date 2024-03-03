import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';

import { DataService } from '../core/data.service';
import { Customer, Order } from '../shared/interfaces';
import { CapitalizePipe } from '../shared/capitalize.pipe';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ CommonModule, RouterLink, CapitalizePipe ],
  templateUrl: './orders.component.html',
  styleUrls: [ './orders.component.css' ]
})
export class OrdersComponent {

  orders$: Observable<Order[]> = of([]);
  customer$: Observable<Customer> = of();
  dataService: DataService = inject(DataService);
  route: ActivatedRoute = inject(ActivatedRoute);

  // Get the customer ID from the route
  @Input() set id(value: string) {
    const idParam = +value;
    this.orders$ = this.dataService.getOrders(idParam);
    this.customer$ = this.dataService.getCustomer(idParam);
  }

}
