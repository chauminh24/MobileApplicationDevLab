import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingCardsService } from '../greeting-cards.service';

@Component({
  selector: 'app-greeting-cards-list',
  standalone: true,
  imports: [CommonModule], // Import necessary Angular modules
  templateUrl: './greeting-cards-list.component.html',
  styleUrls: ['./greeting-cards-list.component.css']
})
export class GreetingCardsListComponent implements OnInit {
  greetingCards: any[] = [];
  loading = true;
  errorMessage: string | null = null;

  constructor(private greetingCardsService: GreetingCardsService) {}

  ngOnInit(): void {
    this.greetingCardsService.getGreetingCards().subscribe({
      next: (data) => {
        this.greetingCards = data.greeting_cards;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching greeting cards:', err);
        this.errorMessage = 'Failed to load greeting cards. Showing default cards.';
        this.loading = false;
      }
    });
  }
}
