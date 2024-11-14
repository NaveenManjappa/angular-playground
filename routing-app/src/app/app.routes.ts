import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ThirdComponent } from './third/third.component';
import { routeGuard, routeGuard2 } from './route-guard.guard';

export const routes: Routes = [
  { path:'first-component', title:'First Component', component:FirstComponent,
    children: [
      { path:'child-a', title:'Child A', 
        loadComponent: () => import('./first/child-a/child-a.component').then(c => c.ChildAComponent) },
      { path: 'child-b', title:'Child B', canActivate:[routeGuard2,routeGuard],
        loadComponent : () => import('./first/child-b/child-b.component').then(c => c.ChildBComponent) //lazy loading a route or component
      }
    ]
   },
  { path:'second-component',title:'Second Component', component:SecondComponent },
  { path:'third-component/:id',title:'Third Component',component:ThirdComponent },
  { path: '',redirectTo:'/first-component',pathMatch:'full'},
  { path: '**', component:PagenotfoundComponent }
];
