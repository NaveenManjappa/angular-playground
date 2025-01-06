import { Routes } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { AdvancedSingalsComponent } from './advanced-singals/advanced-singals.component';

export const routes: Routes = [
  { path:'signals',component:SignalsComponent },
  { path:'advanced-signals',component:AdvancedSingalsComponent }
];
