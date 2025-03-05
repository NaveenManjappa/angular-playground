import { Injectable, signal } from "@angular/core";
import { TodoInteface } from "../types/todo.interface";
import { FiltersEnum } from "../types/filter.enum";

@Injectable({
  providedIn:'root'
})
export class TodosService {
  todosSig = signal<TodoInteface[]>([]);
  filter = signal<FiltersEnum>(FiltersEnum.all);

  addTodo(text:string):void {
    const newTodo:TodoInteface = {
      text,
      isCompleted:false,
      id:Math.random().toString(16)
    };

    this.todosSig.update(todos => [...todos,newTodo]);
  }
}