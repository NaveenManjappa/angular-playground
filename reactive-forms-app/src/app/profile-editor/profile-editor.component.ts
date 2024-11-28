import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {

  profileForm:FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl()
    })
  });

  saveProfile(){
    console.log(this.profileForm.value);
  }

  updateProfile() {

    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street:'Drake way'
      }
    });

    // this will throw runtime error ERROR RuntimeError: NG01002: Must supply a value for form control with name: 'city'

    // this.profileForm.setValue({
    //   firstName: 'Nancy',
    //   lastName: 'Pelocy',
    //   address: {
    //     street:'Drake way'
    //   }
    // });

  }
}
