import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoffeeContributionCrudComponent } from './coffee-contribution-crud/coffee-contribution-crud.component';
import { CoffeeFormSubmitComponent } from './coffee-form-submit/coffee-form-submit.component';
import { CoffeeListContributionsComponent } from './coffee-list-contributions/coffee-list-contributions.component';
import { CoffeeContributionReportComponent } from './coffee-contribution-report/coffee-contribution-report.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeContributionCrudComponent,
    CoffeeFormSubmitComponent,
    CoffeeListContributionsComponent,
    CoffeeContributionReportComponent
  ],
  imports: 
  [       
    BrowserModule, 
    FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})

export class AppModule { }
