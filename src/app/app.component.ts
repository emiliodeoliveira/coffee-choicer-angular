import { Component, Input } from '@angular/core';
import { CoffeeContribution } from './coffee-contribution';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coffee Choicer';

  // _email, _quantity, _createdOn

  list = []

  getUrl() {
    return "url('/assets/img/coffee.jpg')";
  }

  onCreated(coffee) {
    this.list.push(coffee);
  }


}
