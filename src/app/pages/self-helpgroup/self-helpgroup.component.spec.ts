import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfHelpgroupComponent } from './self-helpgroup.component';

describe('SelfHelpgroupComponent', () => {
  let component: SelfHelpgroupComponent;
  let fixture: ComponentFixture<SelfHelpgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfHelpgroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfHelpgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
