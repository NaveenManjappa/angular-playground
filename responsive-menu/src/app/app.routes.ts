import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: 'dashboard',component:DashboardComponent},
  { path:'pages',component:PagesComponent},
  { path:'products',component:ProductsComponent},
  { path:'settings',component:SettingsComponent},
  { path:'',redirectTo:'dashboard',pathMatch:'full'}
];
