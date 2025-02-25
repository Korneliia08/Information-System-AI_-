import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCabinetNavGroupComponent } from './user-cabinet-nav-group.component';

describe('UserCabinetNavGroupComponent', () => {
  let component: UserCabinetNavGroupComponent;
  let fixture: ComponentFixture<UserCabinetNavGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCabinetNavGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCabinetNavGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
