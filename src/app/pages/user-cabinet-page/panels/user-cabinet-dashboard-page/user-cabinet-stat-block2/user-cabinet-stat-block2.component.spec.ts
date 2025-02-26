import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCabinetStatBlock2Component } from './user-cabinet-stat-block2.component';

describe('UserCabinetStatBlock2Component', () => {
  let component: UserCabinetStatBlock2Component;
  let fixture: ComponentFixture<UserCabinetStatBlock2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCabinetStatBlock2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCabinetStatBlock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
