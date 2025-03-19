import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  standalone: false,  
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit{
 
  @Input() currentPage:number = 1;
  @Input() total:number = 0;
  @Input() limit:number = 20;
  @Output() changePage = new EventEmitter<number>();

  pages:number[] = [];

  ngOnInit(): void {
    const pagesCount = Math.ceil(this.total / this.limit);    
    this.pages = this.range(1,pagesCount);
    console.log(this.pages);
  }

  range(start:number,end:number):number[] {
    return [...Array(end).keys()].map(el => el+start);
  }

}
