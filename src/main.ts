// Supports JIT compilation and execution of Angular apps on different supported browsers.
// There is also a testing module available, see https://angular.io/api/platform-browser-dynamic
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';


// The platformBrowserDynamic() function creates a platform for Angular on the web page. The bootstrapModule() function then bootstraps the application by injecting the AppModule into the platform. The catch() function catches any errors that occur during the bootstrapping process and logs them to the console.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
