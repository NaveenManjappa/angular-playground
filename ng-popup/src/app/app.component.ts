import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { AlertTypeEnum } from './alert/types/alertType.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-popup';
  alertTypes=AlertTypeEnum;
  constructor(private alertService:AlertService){}

  showAlert(type:AlertTypeEnum){
    this.alertService.setAlert({
      type,
      text:'This is a test alert'
    });
  }


}
