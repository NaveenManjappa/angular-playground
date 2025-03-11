import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from "./calendar/calendar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-calendar';
  meetings = {
    '2025-03-05':['Drink Coffee','Learn React','Sleep'],
    '2025-03-06':['Drink Coffee','Learn Angular','Sleep']
  };

  
}
