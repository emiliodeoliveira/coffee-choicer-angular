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

  list = [new CoffeeContribution("teste@teste",1, new Date("06/11/2018"))]
  
  @Input()
  

  
  

  getUrl()
{
  return "url('/assets/img/coffee.jpg')";
}
    
}
