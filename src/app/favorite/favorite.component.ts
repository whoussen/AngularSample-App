import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';



@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css'],
    encapsulation : ViewEncapsulation.Emulated
  })

export class FavoriteComponent implements OnInit {
    // tslint:disable-next-line:no-input-rename
    @Input('isFavorite') isSeleced: boolean | undefined;
    // tslint:disable-next-line:no-output-rename
    @Output('change') change = new EventEmitter();

    constructor() {
     // this.isFavorite=true;
    }
    onClick(): void {
        this.isSeleced = !this.isSeleced;
        this.change.emit({newValue: this.isSeleced});
    }

    ngOnInit(): void {

    }
  }

export interface FavoriteChangedEventArgs {
    newValue: boolean;
  }
