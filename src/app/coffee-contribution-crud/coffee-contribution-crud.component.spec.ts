import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeContributionCrudComponent } from './coffee-contribution-crud.component';

describe('CoffeeContributionCrudComponent', () => {
  let component: CoffeeContributionCrudComponent;
  let fixture: ComponentFixture<CoffeeContributionCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeContributionCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeContributionCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
