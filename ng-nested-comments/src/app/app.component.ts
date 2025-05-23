import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentsModule } from './comments/comments.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-nested-comments';
}
