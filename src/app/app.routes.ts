import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers'},
    { path: 'customers', loadComponent: () => import('./customers/customers.component').then(m => m.CustomersComponent) },
    { path: 'orders/:id', loadComponent: () => import('./orders/orders.component').then(m => m.OrdersComponent) },
    { path: '**', pathMatch: 'full', redirectTo: '/customers' }
];
