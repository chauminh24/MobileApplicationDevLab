import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GreetingCardsService {
  private apiUrl = 'https://jsonblob.com/api/jsonBlob/1346991862761840640';

  // Fallback data in case the API fails
  private fallbackData = {
    greeting_cards: [
      { id: "1", text: "Happy Birthday to you!", text_color: "Red", text_font: "Times New Roman", text_font_size: "20pt", card_bg_color: "White", card_width: "70%" },
      { id: "2", text: "Congratulations!!!", text_color: "Blue", text_font: "Arial", text_font_size: "40pt", card_bg_color: "Green", card_width: "70%" },
      { id: "3", text: "I miss you!!", text_color: "Yellow", text_font: "Verdana", text_font_size: "30pt", card_bg_color: "Black", card_width: "70%" }
    ]
  };

  constructor(private http: HttpClient) {}

  getGreetingCards(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching data, using fallback:', error);
        return of(this.fallbackData); // Return fallback data as an observable
      })
    );
  }
}
