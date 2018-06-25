import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeChartTopcontributorsComponent } from './coffee-chart-topcontributors.component';

describe('CoffeeChartTopcontributorsComponent', () => {
  let component: CoffeeChartTopcontributorsComponent;
  let fixture: ComponentFixture<CoffeeChartTopcontributorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeChartTopcontributorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeChartTopcontributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
