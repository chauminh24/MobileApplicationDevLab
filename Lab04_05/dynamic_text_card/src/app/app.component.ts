import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextControlsComponent } from './text-controls/text-controls.component';
import { TextCardComponent } from './text-card/text-card.component';
import { GreetingCardsListComponent } from './greeting-cards-list/greeting-cards-list.component';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextControlsComponent, TextCardComponent, GreetingCardsListComponent, WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dynamic-text-card';
}