import { Component, output } from '@angular/core';

@Component({
  selector: 'output-basics',
  standalone: true,
  imports: [],
  templateUrl: './output-basics.component.html',
  styleUrl: './output-basics.component.css'
})
export class OutputBasicsComponent {
  slider = output<any>();

  expand(){
    this.slider.emit({x:100,y:200});
  }
}
