import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCabinetDashboardPageComponent } from './user-cabinet-dashboard-page.component';

describe('UserCabinetDashboardPageComponent', () => {
  let component: UserCabinetDashboardPageComponent;
  let fixture: ComponentFixture<UserCabinetDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [UserCabinetDashboardPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(UserCabinetDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
