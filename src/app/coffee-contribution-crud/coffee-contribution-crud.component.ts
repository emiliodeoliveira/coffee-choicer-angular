import { Component, OnInit } from '@angular/core';
import { CoffeeContribution } from '../coffee-contribution';

@Component({
  selector: 'app-coffee-contribution-crud',
  templateUrl: './coffee-contribution-crud.component.html',
  styleUrls: ['./coffee-contribution-crud.component.css']
})
export class CoffeeContributionCrudComponent implements OnInit {
  list = []
  constructor() { }

  ngOnInit() {
  }

  onCreated(coffee) {
    this.list.push(coffee);
  }
}
