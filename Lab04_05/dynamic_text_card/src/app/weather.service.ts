import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '3c4861a91617e6bd4a15df4b9230a623'; // ✅ Your actual API key
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Galway&units=metric&APPID=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getWeather(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching weather data:', error);
        return of({ error: 'Failed to load weather data' }); // Return a fallback response
      })
    );
  }
}
