import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeContributionReportComponent } from './coffee-contribution-report.component';

describe('CoffeeContributionReportComponent', () => {
  let component: CoffeeContributionReportComponent;
  let fixture: ComponentFixture<CoffeeContributionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeContributionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeContributionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
