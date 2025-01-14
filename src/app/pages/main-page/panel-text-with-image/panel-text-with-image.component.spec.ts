import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTextWithImageComponent } from './panel-text-with-image.component';

describe('PanelTextWithImageComponent', () => {
  let component: PanelTextWithImageComponent;
  let fixture: ComponentFixture<PanelTextWithImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelTextWithImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelTextWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
