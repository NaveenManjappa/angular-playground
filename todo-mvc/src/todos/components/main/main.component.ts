import { Component, computed, inject } from "@angular/core";
import { TodosService } from "../../services/todos.service";
import { CommonModule } from "@angular/common";
import { FiltersEnum } from "../../types/filter.enum";
import { TodoComponent } from "../todo/todo.component";

@Component({
  selector:'app-todos-main',
  templateUrl:'./main.component.html',
  standalone:true,
  imports: [CommonModule, TodoComponent]
})
export class TodosMainComponent { 
  todoService = inject(TodosService);
  editingId:string | null = null;
  visisbleTodos = computed(() => {
    const todos = this.todoService.todosSig();
    const filter = this.todoService.filter();

    if(filter === FiltersEnum.active)
      return todos.filter(t => !t.isCompleted);

    if(filter === FiltersEnum.completed)
      return todos.filter(t => t.isCompleted);
    return todos;
  });

  noTodos = computed(() => {
    return this.todoService.todosSig().length === 0;
  });

  setEditingId(id:string|null){
    this.editingId = id;
  }

  isAllTodosSelected = computed(()=>{
    this.todoService.todosSig().every(todo => todo.isCompleted);
  });

  toggleAllTodos(event:Event){
    this.todoService.toggleAll((event.target as HTMLInputElement).checked);
  }
}