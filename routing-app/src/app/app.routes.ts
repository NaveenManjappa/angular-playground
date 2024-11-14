import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChildAComponent } from './first/child-a/child-a.component';
import { ChildBComponent } from './first/child-b/child-b.component';
import { ThirdComponent } from './third/third.component';

export const routes: Routes = [
  { path:'first-component', title:'First Component', component:FirstComponent,
    children: [
      { path:'child-a', title:'Child A', 
        loadComponent: () => import('./first/child-a/child-a.component').then(c => c.ChildAComponent) },
      { path: 'child-b', title:'Child B', 
        loadComponent : () => import('./first/child-b/child-b.component').then(c => c.ChildBComponent) //lazy loading a route or component
      }
    ]
   },
  { path:'second-component',title:'Second Component', component:SecondComponent },
  { path:'third-component/:id',title:'Third Component',component:ThirdComponent },
  { path: '',redirectTo:'/first-component',pathMatch:'full'},
  { path: '**', component:PagenotfoundComponent }
];
