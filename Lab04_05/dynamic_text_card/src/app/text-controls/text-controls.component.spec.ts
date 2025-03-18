import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextControlsComponent } from './text-controls.component';

describe('TextControlsComponent', () => {
  let component: TextControlsComponent;
  let fixture: ComponentFixture<TextControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
