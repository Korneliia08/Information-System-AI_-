import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YTpartComponent } from './ytpart.component';

describe('YTpartComponent', () => {
  let component: YTpartComponent;
  let fixture: ComponentFixture<YTpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YTpartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YTpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
