import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCabinetStatBlock1Component } from './user-cabinet-stat-block1.component';

describe('UserCabinetStatBlock1Component', () => {
  let component: UserCabinetStatBlock1Component;
  let fixture: ComponentFixture<UserCabinetStatBlock1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCabinetStatBlock1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCabinetStatBlock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
