import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {

  profileForm1:FormGroup = new FormGroup({
    firstName: new FormControl<number>(0),
    lastName: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl()
    })
  });

  // using FormBuilder service
  private formBuilder = inject(FormBuilder);
  profileForm = this.formBuilder.group({
    firstName: ['',Validators.required],
    lastName:[''],
    address: this.formBuilder.group({
      street:[''],
      city:[''],
      state:[''],
      zip:['']
    }),
    aliases: this.formBuilder.array([''])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {   
   
    this.aliases.push(this.formBuilder.control(''));
  }

  saveProfile(){
    console.log(this.profileForm.value);
  }

  updateProfile() {

    //Even thogh profileForm1 is defined as strictly typed form control which can take number, patchValue still allows to set the string value
    this.profileForm1.patchValue({
      firstName: 'name'
    });

    this.profileForm1.value.firstName = 'tt';
    console.log(this.profileForm1);

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
