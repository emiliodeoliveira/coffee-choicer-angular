import { Injectable, Input } from '@angular/core';
import { CoffeeContribution } from './coffee-contribution';

@Injectable({
  providedIn: 'root'
})

export class CoffeeContributionDataService {
  @Input()
  private data: Array<CoffeeContribution> = [
    new CoffeeContribution("Jorge Silveira", "jsilveira@gmail.com", 1, new Date(2018, 6, 13)),
    new CoffeeContribution("Amanda Fagundes", "a.fagundes@gmail.com", 2, new Date(2018, 6, 12))
  ]

  constructor() {
    console.log("Constructed!")
  }

  getData() {
    return this.data;
  }

  onItemDeleted(index) {
    this.data.splice(index, 1);
  }
}



