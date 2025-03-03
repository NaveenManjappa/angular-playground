import { Injectable, signal } from "@angular/core";
import { TodoInteface } from "../types/todo.interface";

@Injectable({
  providedIn:'root'
})
export class TodosService {
  todosSig = signal<TodoInteface[]>([]);

  addTodo(text:string):void {
    const newTodo:TodoInteface = {
      text,
      isCompleted:false,
      id:Math.random().toString(16)
    };

    this.todosSig.update(todos => [...todos,newTodo]);
  }
}