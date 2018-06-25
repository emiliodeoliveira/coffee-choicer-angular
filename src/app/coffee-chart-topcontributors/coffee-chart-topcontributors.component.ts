import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoffeeContribution } from '../coffee-contribution';
import { CoffeeContributionDataService } from '../coffee-contribution-data.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-coffee-chart-topcontributors',
  templateUrl: './coffee-chart-topcontributors.component.html',
  styleUrls: ['./coffee-chart-topcontributors.component.css']
})
export class CoffeeChartTopcontributorsComponent implements OnInit {
  
  @Input()
  cont: CoffeeContribution[];
  
  /* constructor(coffeeConntributionService: CoffeeContributionDataService) { 
    this.cont = coffeeConntributionService.getData();
  }*/


  ngOnInit() {

    var canvas : any = document.getElementById("myChart");
    var ctx = canvas.getContext("2d");

    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
        datasets: [{
            responsive: true,
            label: "Top contribuidores",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],            
        }]
    },
  }
  }
}