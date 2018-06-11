import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoffeeContributionCrudComponent } from './coffee-contribution-crud/coffee-contribution-crud.component';
import { CoffeeFormSubmitComponent } from './coffee-form-submit/coffee-form-submit.component';
import { CoffeeListContributionsComponent } from './coffee-list-contributions/coffee-list-contributions.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeContributionCrudComponent,
    CoffeeFormSubmitComponent,
    CoffeeListContributionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
