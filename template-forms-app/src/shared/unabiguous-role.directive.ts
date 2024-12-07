import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { unambiguousRoleValidator } from "./unambiguous-role-validator";

@Directive({
  selector:'[appUnambiguousrole]',
  providers:[{provide:NG_VALIDATORS,useExisting:UnambiguousRoleDirective,multi:true}],
  standalone:true

})
export class UnambiguousRoleDirective implements Validator {

  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    return unambiguousRoleValidator(control);
  }
  

}