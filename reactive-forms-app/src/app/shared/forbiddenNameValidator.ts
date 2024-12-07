import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(regex:RegExp): ValidatorFn {
return (control:AbstractControl): ValidationErrors | null => {
  const forbidden = regex.test(control.value);
  return forbidden ? {forbiddenNameError: { value:control.value }} : null;
}
}