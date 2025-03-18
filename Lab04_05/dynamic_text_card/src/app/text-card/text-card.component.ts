import { Component, OnInit, OnDestroy } from '@angular/core';
import { TextStyleService } from '../text-style.service';

@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.css']
})
export class TextCardComponent implements OnInit, OnDestroy {
  textData: any;
  interval: any;

  constructor(private textStyleService: TextStyleService) {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.textData = this.textStyleService.getTextDate();
    }, 500);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
