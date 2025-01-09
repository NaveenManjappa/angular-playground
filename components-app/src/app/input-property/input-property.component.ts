import { Component, signal } from '@angular/core';
import { InputBasicsComponent } from './input-basics/input-basics.component';

@Component({
  selector: 'input-property',
  standalone: true,
  imports: [InputBasicsComponent],
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.css'
})
export class InputPropertyComponent {
  volume = signal(0);
  protected volumeP=0;

  change(){
    console.log('Model event');
  }

  increment(){
    this.volume.update(p=>p+1);
  }
}
