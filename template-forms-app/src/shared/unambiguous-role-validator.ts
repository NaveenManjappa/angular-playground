import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const unambiguousRoleValidator:ValidatorFn = (control:AbstractControl):ValidationErrors | null => {
  
  const name = control.get('name');
  const role = control.get('role');
  console.log(name?.value,role?.value);

  return name && role && name.value == role.value ? { unambiguousRole: true } : null;
}