import { Component, Input } from '@angular/core';
import { SlideInterface } from './types/slide.interface';

@Component({
  selector: 'image-slider',
  standalone: false,  
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
@Input() slides:SlideInterface[]=[];
currentIndex:number = 0;

getCurrentSlideUrl():string {
  return `url('${this.slides[this.currentIndex].url}')`;
}

goToNext():void {    
  this.currentIndex = this.isLastSlide() ? 0 : this.currentIndex + 1;
}

goToPrevious():void {
  this.currentIndex = this.isFirstSlide() ? this.slides.length - 1 : this.currentIndex - 1;
}

isLastSlide():boolean {
  return this.currentIndex === this.slides.length - 1;
}

isFirstSlide():boolean {
  return this.currentIndex === 0;
}

goToSlide(slideIndex:number):void {
  this.currentIndex = slideIndex;
}
}
