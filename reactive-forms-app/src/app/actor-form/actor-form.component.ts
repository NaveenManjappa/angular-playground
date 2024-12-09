import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Actor } from '../shared/actor';
import { forbiddenNameValidator } from '../shared/forbiddenNameValidator';
import { unambiguousRoleValidator } from '../shared/unambiguousRole';
import { UniqueRoleValidator } from '../shared/uniqueRoleValidators';

@Component({
  selector: 'app-actor-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.css'
})
export class ActorFormComponent implements OnInit {
  
  skills = ['Method Acting', 'Dancing', 'Singing','Sword Fighting'];
  model = new Actor(1,'Tom Cruise',this.skills[3],'CWR');
  submitted = false;
  actorForm!: FormGroup;

  constructor(private uniqueRoleValidator:UniqueRoleValidator){

  }
  ngOnInit(): void {
    this.actorForm = new FormGroup({
      name:new FormControl(this.model.name,[
        Validators.required,
        Validators.minLength(3),
        forbiddenNameValidator(/bob/i)
      ]),
      role: new FormControl('',{
        asyncValidators:[this.uniqueRoleValidator.validate.bind(this.uniqueRoleValidator)],
        updateOn:'blur'
      }),
      skill:new FormControl(this.model.skill,Validators.required),
      studio:new FormControl(this.model.studio)
    },{validators:unambiguousRoleValidator});
  }


  onSubmit(){
    console.log(this.actorForm);
    this.submitted=true;
  }

  newActor() {
    this.actorForm.reset();
  }

  onEdit(){
    this.submitted = false;
  }

  onBlurred() {
    console.log('On blur event');
    console.log(this.actorForm);
  }

  get name() {
    return this.actorForm.get('name');
  }

  get studio() {
    return this.actorForm.get('studio');
  }

  get skill(){
    return this.actorForm.get('skill');
  }

  get role(){
    return this.actorForm.get('role');
  }
}
