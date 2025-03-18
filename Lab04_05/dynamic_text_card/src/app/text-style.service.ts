import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextStyleService {
  private textData = {
    text: 'This is the default message',
    selectedFont: 'Arial',
    fontSize: 16,
    colorText: '#000000',
    cardBgColor: '#FFFFFF',
    cardWidth: '60%'
  };

  updateText(params: any) {
    this.textData = { ...this.textData, ...params };
  }

  updateCard(params: any) {
    this.textData = { ...this.textData, ...params };
  }

  getTextDate() {
    return this.textData;
  }
}
