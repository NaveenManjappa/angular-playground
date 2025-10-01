import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { uniqueEmailValidator } from '../validators/unique-email.validator';
import { noSpecialCharsValidator } from '../validators/no-special-chars.validator';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration implements OnInit{
 
  registrationForm!:FormGroup;

  constructor(){  }

   ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl(null,[Validators.required,noSpecialCharsValidator]),
      email:new FormControl(null,[Validators.required,Validators.email],uniqueEmailValidator)
    });
  }

}
