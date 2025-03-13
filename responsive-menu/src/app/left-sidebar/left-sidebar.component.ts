import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
items = [
  { routeLink:'dashboard',label:'Dashboard',icon:'fa-solid fa-house'},
  { routeLink:'pages',label:'Pages',icon:'fa-solid fa-file'},
  { routeLink:'products',label:'Products',icon:'fa-solid fa-box-open'},
  { routeLink:'settings',label:'Settings',icon:'fa-solid fa-gear'}
];
}
