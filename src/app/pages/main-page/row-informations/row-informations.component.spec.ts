import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowInformationsComponent } from './row-informations.component';

describe('RowInformationsComponent', () => {
  let component: RowInformationsComponent;
  let fixture: ComponentFixture<RowInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RowInformationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
