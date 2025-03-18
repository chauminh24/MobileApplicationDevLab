import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any = null;
  loading = true;
  errorMessage: string | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe({
      next: (data) => {
        if (data.error) {
          this.errorMessage = data.error;
        } else {
          this.weatherData = data;
        }
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Could not fetch weather data.';
        this.loading = false;
      }
    });
  }
}
