import { NgModule } from '@angular/core';
/**
 * The @angular/platform-browser package is a core package of Angular that provides the platform for Angular applications that run in the browser. It provides the following features:
    A platform that is responsible for loading and initializing Angular applications in the browser.
    A set of services that are used by Angular applications, such as the DomSanitizer service and the Location service.
    A set of directives that are used to interact with the DOM, such as the NgIf directive and the NgFor directive.
    A set of pipes that are used to transform data, such as the DatePipe and the UpperCasePipe.
 */
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrdersModule } from './orders/orders.module';

/*
The @NgModule function is a decorator that is used to define an Angular module. An Angular module is a collection of components, directives, pipes, and services that are used by an Angular application. It is also responsible for bootstrapping the application and providing a configuration for the Angular compiler.
The @NgModule function takes an object as its argument. This object describes the module's configuration. The object has the following properties:

	declarations: An array of classes that represent the components, directives, and pipes that are part of the module.
	imports: An array of modules that are imported by the module.
	exports: An array of classes that are exported by the module.
	providers: An array of providers that are used by the module.
	bootstrap: A string or an array of strings that specifies the root component or components of the module.

	Here, 
	*/
@NgModule({
	imports: [BrowserModule, CoreModule, CustomersModule, OrdersModule, AppRoutingModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
