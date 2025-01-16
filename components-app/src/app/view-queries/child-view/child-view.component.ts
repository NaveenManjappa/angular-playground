import { Component } from '@angular/core';

@Component({
  selector: 'child-view',
  standalone: true,
  imports: [],
  templateUrl: './child-view.component.html',
  styleUrl: './child-view.component.css'
})
export class ChildViewComponent {
  count = 0;
  
  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }
}
