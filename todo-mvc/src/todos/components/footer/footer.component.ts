import { Component } from "@angular/core";
import { FiltersEnum } from "../../types/filter.enum";
import { CommonModule } from "@angular/common";

@Component({
  selector:'app-todos-footer',
  templateUrl:'./footer.component.html',
  standalone:true,
  imports:[CommonModule]
})
export class TodosFooterComponent{
  filterEnum= FiltersEnum;
  selectedFilter='all';
  changeFilter(event:Event,filter:FiltersEnum){
    event.preventDefault();
    this.selectedFilter = filter;
    console.log(filter);
  }
}