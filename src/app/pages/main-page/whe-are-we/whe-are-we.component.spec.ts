import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheAreWeComponent } from './whe-are-we.component';

describe('WheAreWeComponent', () => {
  let component: WheAreWeComponent;
  let fixture: ComponentFixture<WheAreWeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WheAreWeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheAreWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
