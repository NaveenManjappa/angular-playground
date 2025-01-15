import { Component, signal } from '@angular/core';
import { UserProfileComponent } from "./user-profile/user-profile.component";

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [UserProfileComponent],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent {
  name = signal('abc');
  changeName(){
    this.name.set('Navi');
  }
}
