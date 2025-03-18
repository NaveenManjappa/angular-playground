import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlideInterface } from './image-slider/types/slide.interface';
import { ImageSliderModule } from './image-slider/image-slider.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImageSliderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-slider';
  @Input() slides:SlideInterface[] = [
    { url:'assets/image-1.jpeg',title:'Beach'},
    { url:'assets/image-2.jpeg',title:'Boat'},
    { url:'assets/image-3.jpeg',title:'Forest'},
    { url:'assets/image-4.jpeg',title:'City'},
    { url:'assets/image-5.jpeg',title:'Italy'}
  ];
}
