import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClickOutside } from './clickOutside.directive';


@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [CommonModule,ClickOutside],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-dropdown';
  isMenuOpened:boolean = false;
  toggleMenu(){
    this.isMenuOpened=!this.isMenuOpened;
  }

  clickedOutside():void {
    console.log('clicked outside');
    if(this.isMenuOpened)
      this.toggleMenu();

  }
}
