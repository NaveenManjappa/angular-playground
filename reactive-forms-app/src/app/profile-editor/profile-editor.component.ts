import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {

  profileForm:FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  });

  saveUser(){
    console.log(this.profileForm.value);
  }
}
