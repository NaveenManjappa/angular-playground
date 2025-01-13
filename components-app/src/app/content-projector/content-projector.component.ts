import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'content-projector',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './content-projector.component.html',
  styleUrl: './content-projector.component.css'
})
export class ContentProjectorComponent {

}
