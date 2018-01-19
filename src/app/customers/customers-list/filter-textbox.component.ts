import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'filter-textbox',
    template: `    
        Filter: <input type="text" [(ngModel)]="filter" (keyup)="filterChanged($event)" />
              <!--<button [disabled]="!filter" (click)="filterChanged($event)">Filter</button>-->
    `
})
export class FilterTextboxComponent implements OnInit {

    filter: string = null;
    
    @Output() changed: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { 

    }

    filterChanged(event: any) {
      event.preventDefault();
      this.changed.emit(this.filter); //Raise changed event
    }

}