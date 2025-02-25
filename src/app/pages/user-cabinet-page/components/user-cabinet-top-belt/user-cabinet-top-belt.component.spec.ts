import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCabinetTopBeltComponent } from './user-cabinet-top-belt.component';

describe('UserCabinetTopBeltComponent', () => {
  let component: UserCabinetTopBeltComponent;
  let fixture: ComponentFixture<UserCabinetTopBeltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [UserCabinetTopBeltComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(UserCabinetTopBeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
