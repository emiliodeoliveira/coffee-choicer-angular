import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeFormSubmitComponent } from './coffee-form-submit.component';

describe('CoffeeFormSubmitComponent', () => {
  let component: CoffeeFormSubmitComponent;
  let fixture: ComponentFixture<CoffeeFormSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeFormSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeFormSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
