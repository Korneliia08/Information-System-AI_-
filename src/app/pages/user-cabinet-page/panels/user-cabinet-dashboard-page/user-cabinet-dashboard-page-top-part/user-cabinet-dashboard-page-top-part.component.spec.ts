import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCabinetDashboardPageTopPartComponent } from './user-cabinet-dashboard-page-top-part.component';

describe('UserCabinetDashboardPageTopPartComponent', () => {
  let component: UserCabinetDashboardPageTopPartComponent;
  let fixture: ComponentFixture<UserCabinetDashboardPageTopPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCabinetDashboardPageTopPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCabinetDashboardPageTopPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
