import { AbstractControl, ValidationErrors } from "@angular/forms"

export const noSpecialCharsValidator =(control:AbstractControl):ValidationErrors | null => {
  const hasSpecialChars = /[^a-zA-Z\s]/.test(control.value);
  return hasSpecialChars ? {'hasSpecialChars':true} :null;
}