import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingCardsListComponent } from './greeting-cards-list.component';

describe('GreetingCardsListComponent', () => {
  let component: GreetingCardsListComponent;
  let fixture: ComponentFixture<GreetingCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingCardsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
