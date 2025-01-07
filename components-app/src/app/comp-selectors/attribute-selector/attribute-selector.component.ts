import { Component } from '@angular/core';

@Component({
  selector: 'button[attribute-selector]',
  standalone: true,
  imports: [],
  //templateUrl: './attribute-selector.component.html',
  template:`<div>
            Not a button anymore
            <ng-content></ng-content>
            </div>
            `,
  styleUrl: './attribute-selector.component.css'
})
export class AttributeSelectorComponent {

}
