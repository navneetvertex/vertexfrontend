import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAgainstFDComponent } from './loan-against-fd.component';

describe('LoanAgainstFDComponent', () => {
  let component: LoanAgainstFDComponent;
  let fixture: ComponentFixture<LoanAgainstFDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanAgainstFDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanAgainstFDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
