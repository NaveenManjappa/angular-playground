import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActorFormComponent } from './actor-form/actor-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ActorFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-forms-app';
}
