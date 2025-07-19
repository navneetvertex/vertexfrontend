import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillUdaanComponent } from './skill-udaan.component';

describe('SkillUdaanComponent', () => {
  let component: SkillUdaanComponent;
  let fixture: ComponentFixture<SkillUdaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillUdaanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillUdaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
