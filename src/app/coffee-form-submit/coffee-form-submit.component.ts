import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CoffeeContribution } from '../coffee-contribution';

@Component({
  selector: 'app-coffee-form-submit',
  templateUrl: './coffee-form-submit.component.html',
  styleUrls: ['./coffee-form-submit.component.css']
})
export class CoffeeFormSubmitComponent implements OnInit {

  
  @Output() created = new EventEmitter<CoffeeContribution>();
  constructor() { }

  ngOnInit() {
  }

  coffee = new CoffeeContribution();
  onButtonClick() {
    this.created.emit(this.coffee);
    this.coffee = new CoffeeContribution();
  }
}
