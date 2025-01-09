import { Component } from '@angular/core';
import { CompStylingComponent } from "../../comp-styling/comp-styling.component";

@Component({
  selector: '.class-selector',
  standalone: true,
  imports: [CompStylingComponent],
  templateUrl: './class-selector.component.html',
  styleUrl: './class-selector.component.css'
})
export class ClassSelectorComponent {

}
