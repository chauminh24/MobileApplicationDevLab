import { TestBed } from '@angular/core/testing';

import { GreetingCardsService } from './greeting-cards.service';

describe('GreetingCardsService', () => {
  let service: GreetingCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreetingCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
