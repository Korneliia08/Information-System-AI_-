import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDocumentationComponent } from './ai-documentation.component';

describe('AiDocumentationComponent', () => {
  let component: AiDocumentationComponent;
  let fixture: ComponentFixture<AiDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AiDocumentationComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AiDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
