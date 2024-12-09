import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { UniqueRoleValidator } from './unique-role-validator';

@Directive({
  selector: '[appUniqueRole]',
  providers:[{
    provide:NG_ASYNC_VALIDATORS,
    useExisting:forwardRef(() => UniqueRoleDirective),
    multi:true
  }],
  standalone: true
})
export class UniqueRoleDirective implements AsyncValidator {

  constructor(private uniqueRoleValidator:UniqueRoleValidator) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.uniqueRoleValidator.validate(control);
  }
  

}
