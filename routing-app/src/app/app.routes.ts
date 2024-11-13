import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChildAComponent } from './first/child-a/child-a.component';
import { ChildBComponent } from './first/child-b/child-b.component';

export const routes: Routes = [
  { path:'first-component', title:'First Component', component:FirstComponent,
    children: [
      { path:'child-a', title:'Child A', component: ChildAComponent },
      { path: 'child-b', title:'Child B', component: ChildBComponent }
    ]
   },
  { path:'second-component',title:'Second Component', component:SecondComponent },
  { path: '',redirectTo:'/first-component',pathMatch:'full'},
  { path: '**', component:PagenotfoundComponent }
];
