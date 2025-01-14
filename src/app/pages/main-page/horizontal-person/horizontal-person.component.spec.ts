import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalPersonComponent } from './horizontal-person.component';

describe('HorizontalPersonComponent', () => {
  let component: HorizontalPersonComponent;
  let fixture: ComponentFixture<HorizontalPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorizontalPersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
