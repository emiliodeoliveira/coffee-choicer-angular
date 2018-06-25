import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoffeeContribution } from '../coffee-contribution';
import { CoffeeContributionDataService } from '../coffee-contribution-data.service';

@Component({
  selector: 'app-coffee-contribution-report',
  templateUrl: './coffee-contribution-report.component.html',
  styleUrls: ['./coffee-contribution-report.component.css']
})
export class CoffeeContributionReportComponent implements OnInit {
  contributions: CoffeeContribution[];
  @Input()
  list: Array<CoffeeContribution> = [];
  
  constructor(coffeeConntributionService: CoffeeContributionDataService) { 
    this.contributions = coffeeConntributionService.getData();
  }

  ngOnInit() {
  }
  
  /*verificaMaior() {
    var a = 0;
    for (var _i = 0; _i < contributions.length; _i++) {
      if (contributions[_i].quantity > a){
        a = contributions[_i];
      }
      console.log(item);
    }
  }*/
}
