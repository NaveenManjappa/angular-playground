import { Component } from '@angular/core';
import { OutputBasicsComponent } from "./output-basics/output-basics.component";

@Component({
  selector: 'output-property',
  standalone: true,
  imports: [OutputBasicsComponent],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {
  sliderExpand($event:any){
    console.log($event);
  }
}
