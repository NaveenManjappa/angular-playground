import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'comp-styling',
  standalone: true,
  imports: [],
  templateUrl: './comp-styling.component.html',
  styleUrl: './comp-styling.component.css',
  encapsulation:ViewEncapsulation.None
  //encapsulation:ViewEncapsulation.Emulated,
  //encapsulation:ViewEncapsulation.ShadowDom

})
export class CompStylingComponent {

}
