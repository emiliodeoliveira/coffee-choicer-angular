import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/crud', pathMatch: 'full' },
  { path: 'crud', component: CoffeeContributionCrudComponent},
  { path: 'report', component: CoffeeContributionReportComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]  
})
export class AppRoutingModule {}

import { CoffeeContributionCrudComponent } from './coffee-contribution-crud/coffee-contribution-crud.component';
import { CoffeeContributionReportComponent } from './coffee-contribution-report/coffee-contribution-report.component';


