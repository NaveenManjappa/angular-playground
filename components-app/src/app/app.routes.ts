import { Routes } from '@angular/router';
import { CompSelectorsComponent } from './comp-selectors/comp-selectors.component';
import { CompStylingComponent } from './comp-styling/comp-styling.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { ContentProjectorComponent } from './content-projector/content-projector.component';

export const routes: Routes = [
  { path:'selector',component:CompSelectorsComponent },
  { path:'styling',component:CompStylingComponent  },
  { path:'input',component:InputPropertyComponent },
  { path:'output',component:OutputPropertyComponent },
  { path:'content',component:ContentProjectorComponent }
];
