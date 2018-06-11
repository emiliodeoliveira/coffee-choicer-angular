import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coffee Choicer';

list = ['Daniel','Rodrigo', 'Matheus']

  onButtonClick(): void{
    alert('add');
  }

  getUrl()
{
  return "url('/assets/img/coffee.jpg')";
}
    
}
