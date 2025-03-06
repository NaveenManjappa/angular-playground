import { Component, inject } from "@angular/core";
import { FiltersEnum } from "../../types/filter.enum";
import { CommonModule } from "@angular/common";
import { TodosService } from "../../services/todos.service";

@Component({
  selector:'app-todos-footer',
  templateUrl:'./footer.component.html',
  standalone:true,
  imports:[CommonModule]
})
export class TodosFooterComponent{
  todoService = inject(TodosService);
  filterEnum = FiltersEnum;
  filterSig = this.todoService.filter;

  selectedFilter='all';
  changeFilter(event:Event,filter:FiltersEnum){
    event.preventDefault();
    this.filterSig.set(filter);
    console.log(filter);
  }
}