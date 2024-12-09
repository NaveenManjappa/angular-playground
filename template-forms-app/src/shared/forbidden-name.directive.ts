import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(regex: RegExp): ValidatorFn {
  
  return (control:AbstractControl): ValidationErrors | null => {
    const forbidden = regex.test(control.value);
    return forbidden ? { forbiddenNameError: {value:control.value}} : null;
  }
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [{ provide:NG_VALIDATORS,useExisting:ForbiddenNameDirective,multi:true }],
  standalone: true
})
export class ForbiddenNameDirective implements Validator {

  @Input('appForbiddenName') forbiddenName = '';
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log('validate');
    return this.forbiddenName ?
      forbiddenNameValidator(new RegExp(this.forbiddenName,'i'))(control)
      : null;
  }  

}
