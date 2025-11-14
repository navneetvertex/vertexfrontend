import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingDepositpageComponent } from './saving-depositpage.component';

describe('SavingDepositpageComponent', () => {
  let component: SavingDepositpageComponent;
  let fixture: ComponentFixture<SavingDepositpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingDepositpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingDepositpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
