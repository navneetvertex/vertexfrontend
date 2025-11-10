import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahyogCardComponent } from './sahyog-card.component';

describe('SahyogCardComponent', () => {
  let component: SahyogCardComponent;
  let fixture: ComponentFixture<SahyogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SahyogCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SahyogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
