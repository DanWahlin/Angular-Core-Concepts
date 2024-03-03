import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-filter-textbox',
    standalone: true,
    imports: [ FormsModule ],
    template: `
        Filter: <input type="text" [(ngModel)]="filter" />
    `
})
export class FilterTextboxComponent{

    private _filter = '';
    @Input() get filter() {
        return this._filter;
    }

    set filter(val: string) {
        this._filter = val;
        this.changed.emit(this.filter); // Raise changed event
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();

}
