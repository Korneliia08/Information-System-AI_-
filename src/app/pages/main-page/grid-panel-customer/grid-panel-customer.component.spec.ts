import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPanelCustomerComponent } from './grid-panel-customer.component';

describe('GridPanelCustomerComponent', () => {
  let component: GridPanelCustomerComponent;
  let fixture: ComponentFixture<GridPanelCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridPanelCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridPanelCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
