import { Component, inject, Inject } from "@angular/core";
import { TodosService } from "../../services/todos.service";

@Component({
  selector:'app-todos-header',
  templateUrl:'./header.component.html',
  standalone:true
})
export class TodosHeaderComponent {
  todoService = inject(TodosService);
  text:string = '';
  changeText(event:Event):void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }
  addTodo(){
    this.todoService.addTodo(this.text);
    this.text = '';
  }
}