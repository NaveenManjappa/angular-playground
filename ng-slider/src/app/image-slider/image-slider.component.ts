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
}
