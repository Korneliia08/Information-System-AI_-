import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetBlockComponent } from './cabinet-block.component';

describe('CabinetBlockComponent', () => {
  let component: CabinetBlockComponent;
  let fixture: ComponentFixture<CabinetBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
