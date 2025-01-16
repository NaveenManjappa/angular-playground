import { Component } from '@angular/core';

@Component({
  selector: 'custom-expando',
  standalone: true,
  imports: [],
  templateUrl: './custom-expando.component.html',
  styleUrl: './custom-expando.component.css'
})
export class CustomExpandoComponent {
text:string = 'Original Custom expando text';
}
