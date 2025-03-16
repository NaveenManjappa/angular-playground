import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserInterface } from '../user.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
fb:FormBuilder = inject(FormBuilder);
http = inject(HttpClient);
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
    this.http.post<{user:UserInterface}>('https://api.realworld.io/api/users',{
      user:this.form.getRawValue()
    }).subscribe(res => {
      console.log(res);
    })
  }
}
