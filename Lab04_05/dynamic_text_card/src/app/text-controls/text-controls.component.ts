import { Component } from '@angular/core';
import { TextStyleService } from '../text-style.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-controls',
  imports: [CommonModule, FormsModule],
  templateUrl: './text-controls.component.html',
  styleUrls: ['./text-controls.component.css']
})
export class TextControlsComponent {
  fontsList = ['Arial', 'Times New Roman', 'Courier New', 'Verdana'];
  text = 'This is the default message';
  selectedFont = 'Arial';
  fontSize = 16;
  colorText = '#000000';
  cardBgColor = '#FFFFFF';
  cardWidth = '60%';

  constructor(private textStyleService: TextStyleService) {}

  updateText() {
    this.textStyleService.updateText({
      text: this.text,
      selectedFont: this.selectedFont,
      fontSize: this.fontSize,
      colorText: this.colorText
    });
  }

  updateCard() {
    this.textStyleService.updateCard({
      cardBgColor: this.cardBgColor,
      cardWidth: this.cardWidth
    });
  }
}
