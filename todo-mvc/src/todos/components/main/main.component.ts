import { Component, computed, inject } from "@angular/core";
import { TodosService } from "../../services/todos.service";
import { CommonModule } from "@angular/common";
import { FiltersEnum } from "../../types/filter.enum";

@Component({
  selector:'app-todos-main',
  templateUrl:'./main.component.html',
  standalone:true,
  imports:[CommonModule]
})
export class TodosMainComponent { 
  todoService = inject(TodosService);
  visisbleTodos = computed(() => {
    const todos = this.todoService.todosSig();
    const filter = this.todoService.filter();

    if(filter === FiltersEnum.active)
      return todos.filter(t => !t.isCompleted);

    if(filter === FiltersEnum.completed)
      return todos.filter(t => t.isCompleted);
    return todos;
  });
}