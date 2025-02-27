import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalBlocksComponent } from './horizontal-blocks.component';

describe('HorizontalBlocksComponent', () => {
  let component: HorizontalBlocksComponent;
  let fixture: ComponentFixture<HorizontalBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
