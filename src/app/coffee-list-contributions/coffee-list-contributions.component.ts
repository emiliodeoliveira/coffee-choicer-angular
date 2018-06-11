import { Component, OnInit } from '@angular/core';
import { CoffeeContribution } from '../coffee-contribution';


@Component({
  selector: 'app-coffee-list-contributions',
  templateUrl: './coffee-list-contributions.component.html',
  styleUrls: ['./coffee-list-contributions.component.css']
})
export class CoffeeListContributionsComponent extends CoffeeContribution {

  constructor() {
    super();
  }

  ngOnInit() {
  }

   // _email, _quantity, _createdOn

   list = [new CoffeeContribution("teste@teste",1, new Date("06/11/2018"))]

}
