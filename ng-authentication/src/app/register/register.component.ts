import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
fb:FormBuilder = inject(FormBuilder);
form:FormGroup;
  /**
   *
   */
  constructor() {
   this.form = this.fb.nonNullable.group({
    username:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
   });
    
  }

  onSubmit():void {
    console.log(this.form);
  }
}
