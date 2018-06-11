import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListContributionsComponent } from './coffee-list-contributions.component';

describe('CoffeeListContributionsComponent', () => {
  let component: CoffeeListContributionsComponent;
  let fixture: ComponentFixture<CoffeeListContributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeListContributionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
