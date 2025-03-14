import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
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

isLeftSidebarCollapsed = input.required<boolean>();
changeIsLeftSidebarCollapsed = output<boolean>();

toggleCollapse(){
  this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
}

closeSidenav():void {
  this.changeIsLeftSidebarCollapsed.emit(true);
}
}
