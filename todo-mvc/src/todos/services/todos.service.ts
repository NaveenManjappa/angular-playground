import { Injectable, signal } from "@angular/core";
import { TodoInterface } from "../types/todo.interface";
import { FiltersEnum } from "../types/filter.enum";

@Injectable({
  providedIn:'root'
})
export class TodosService {
  todosSig = signal<TodoInterface[]>([]);
  filter = signal<FiltersEnum>(FiltersEnum.all);

  addTodo(text:string):void {
    const newTodo:TodoInterface = {
      text,
      isCompleted:false,
      id:Math.random().toString(16)
    };

    this.todosSig.update(todos => [...todos,newTodo]);
  }

  updateTodo(text:string,id:string):void{
    this.todosSig.update(todos => 
      todos.map(todo => 
      todo.id === id ? { ...todo, text } : todo
      )
    );
  }

  changeFilter(filterName:FiltersEnum){
    this.filter.set(filterName);
  }
}