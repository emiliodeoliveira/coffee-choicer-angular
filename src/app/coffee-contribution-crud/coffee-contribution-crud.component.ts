import { Component, OnInit, Input } from '@angular/core';
import { CoffeeContribution } from '../coffee-contribution';
import { CoffeeContributionDataService } from '../coffee-contribution-data.service';


@Component({
  selector: 'app-coffee-contribution-crud',
  templateUrl: './coffee-contribution-crud.component.html',
  styleUrls: ['./coffee-contribution-crud.component.css']
})
export class CoffeeContributionCrudComponent {
  
  public contributions: Array<CoffeeContribution> = [];
   
  
  constructor(coffeeConntributionService: CoffeeContributionDataService) { 
    this.contributions = coffeeConntributionService.getData();
  }
  
 

  onCreated(coffee) {
    this.contributions.push(coffee);
  }
}
