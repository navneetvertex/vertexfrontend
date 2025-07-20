import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavhomComponent } from './navhom.component';

describe('NavhomComponent', () => {
  let component: NavhomComponent;
  let fixture: ComponentFixture<NavhomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavhomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavhomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
