import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoffeeContribution } from '../coffee-contribution';

@Component({
  selector: 'app-coffee-list-contributions',
  templateUrl: './coffee-list-contributions.component.html',
  styleUrls: ['./coffee-list-contributions.component.css']
})
export class CoffeeListContributionsComponent implements OnInit {
  @Input()
  list: Array<CoffeeContribution> = [];
  /*
    @Output()
    created = new EventEmitter<CoffeeContribution>();
  */
  constructor() { }

  ngOnInit() { }

  onCreated() { }

  onItemDeleted(index) {
    this.list.splice(index, 1);
  }
}
