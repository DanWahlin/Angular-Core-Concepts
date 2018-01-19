import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DataService } from './data.service';
import { SorterService } from './sorter.service';

@NgModule({
    imports: [ HttpModule ],
    providers: [ DataService, SorterService ]
})
export class CoreModule { }