import { Component, computed, inject } from "@angular/core";
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

  activeCount = computed(() => {
    return this.todoService.todosSig().filter(t => !t.isCompleted).length;
  });

  noTodos = computed(() => {
    return this.todoService.todosSig().length === 0;
  });

  changeFilter(event:Event,filter:FiltersEnum){
    event.preventDefault();
   this.todoService.changeFilter(filter);
    console.log(filter);
  }
}