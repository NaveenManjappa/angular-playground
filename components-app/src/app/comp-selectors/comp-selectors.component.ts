import { Component } from '@angular/core';
import { TypeSelectorComponent } from './type-selector/type-selector.component';
import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';
import { ClassSelectorComponent } from './class-selector/class-selector.component';

@Component({
  selector: 'comp-selectors',
  standalone: true,
  imports: [TypeSelectorComponent,AttributeSelectorComponent,ClassSelectorComponent],
  templateUrl: './comp-selectors.component.html',
  styleUrl: './comp-selectors.component.css'
})
export class CompSelectorsComponent {

}
