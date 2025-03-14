import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from '../todos/todos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodosComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-mvc';
}
