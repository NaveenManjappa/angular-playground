import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginationModule } from './pagination/pagination.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaginationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-paging';
  currentPage:number = 1;

  changePage(pageNumber:number){
    this.currentPage = pageNumber;
  }
}
