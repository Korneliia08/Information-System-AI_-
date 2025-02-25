import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCabinetPageComponent } from './user-cabinet-page.component';

describe('UserCabinetPageComponent', () => {
  let component: UserCabinetPageComponent;
  let fixture: ComponentFixture<UserCabinetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [UserCabinetPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(UserCabinetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
