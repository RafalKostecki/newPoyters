import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.styl']
})
export class SliderComponent {

  constructor() { }

  @Input() slides;

  public currentSlide = 0;

  prev() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.slides.length - 1;
      return;
    }

    this.currentSlide -= 1;
  }

  next() {
    if (this.currentSlide === this.slides.length - 1) {
      this.currentSlide = 0;
      return;
    }

    this.currentSlide += 1;
  }

  get tapeStyles () {
    const tapeElement: any = document.getElementById('sliderTape');
    const tapeWidth = parseInt(getComputedStyle(tapeElement).width);

    return {
      left: `${(this.currentSlide * tapeWidth) * (-1)}px`
    }
  }

}
