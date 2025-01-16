import { Component } from '@angular/core';

@Component({
  selector: 'custom-toggle',
  standalone: true,
  imports: [],
  templateUrl: './custom-toggle.component.html',
  styleUrl: './custom-toggle.component.css'
})
export class CustomToggleComponent {
  text:string = 'Original Text from custom toggle component';
}
