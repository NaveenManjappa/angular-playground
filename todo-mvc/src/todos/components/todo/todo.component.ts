import { Component, ElementRef, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";
import { TodoInterface } from "../../types/todo.interface";
import { CommonModule } from "@angular/common";
import { TodosService } from "../../services/todos.service";

@Component({
  selector:'app-todo',
  templateUrl:'./todo.component.html',
  standalone:true,
  imports:[CommonModule]
})
export class TodoComponent implements OnInit,OnChanges{
  
  editingText:string='';

  @Input({required:true}) todo!:TodoInterface;
  @Input({required:true}) isEditing!:boolean;
  @Output() setEditingId:EventEmitter<string | null>=new EventEmitter();

  @ViewChild('textInput') textInput?:ElementRef;
  todoService = inject(TodosService);

  ngOnInit(): void {
    this.editingText=this.todo.text;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['isEditing'].currentValue){      
      setTimeout(() => {
        this.textInput?.nativeElement.focus();
      },0);
    }
  }
  

  setTodoInEditMode(event:Event){
   this.setEditingId.emit(this.todo.id);
  }

  changeText(event:Event){
    this.editingText = (event.target as HTMLInputElement).value;    
  }

  changeTodo(event:Event){
   this.todoService.updateTodo(this.editingText,this.todo.id);
   this.setEditingId.emit(null);
  }

  removeTodo():void {
    this.todoService.removeTodo(this.todo.id);
  }

  toggleTodo():void {
    this.todoService.toggleTodo(this.todo.id);
  }
}