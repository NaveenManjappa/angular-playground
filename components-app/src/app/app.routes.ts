import { Routes } from '@angular/router';
import { CompSelectorsComponent } from './comp-selectors/comp-selectors.component';
import { CompStylingComponent } from './comp-styling/comp-styling.component';

export const routes: Routes = [
  { path:'selector',component:CompSelectorsComponent },
  { path:'styling',component:CompStylingComponent  }
];
