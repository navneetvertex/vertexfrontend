import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyIncomeSchemeComponent } from './monthly-income-scheme.component';

describe('MonthlyIncomeSchemeComponent', () => {
  let component: MonthlyIncomeSchemeComponent;
  let fixture: ComponentFixture<MonthlyIncomeSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyIncomeSchemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyIncomeSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
