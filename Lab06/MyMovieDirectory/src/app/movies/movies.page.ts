import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonLabel, IonInput, IonRadioGroup, IonRadio, IonRange, IonButton, IonAccordion, IonAccordionGroup } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
/* Minh Chau Nguyen g00425239 */
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonLabel, IonInput, IonRadioGroup, IonRadio, IonRange, IonButton, IonAccordion, IonAccordionGroup, CommonModule, FormsModule]
})
export class MoviesPage implements OnInit {
  movies: any[] = [];
  searchTitle: string = '';
  searchType: string = '';
  searchYear: number = 2025;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    let apiUrl = `https://www.omdbapi.com/?apikey=110c1bfc&s=${this.searchTitle || 'war'}`;
    if (this.searchType) {
      apiUrl += `&type=${this.searchType}`;
    }
    if (this.searchYear) {
      apiUrl += `&y=${this.searchYear}`;
    }
    this.http.get(apiUrl).subscribe((response: any) => {
      if (response.Search) {
        this.movies = response.Search;
      }
    });
  }
}