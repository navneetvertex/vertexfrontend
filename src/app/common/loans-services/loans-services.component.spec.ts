import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansServicesComponent } from './loans-services.component';

describe('LoansServicesComponent', () => {
  let component: LoansServicesComponent;
  let fixture: ComponentFixture<LoansServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoansServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
