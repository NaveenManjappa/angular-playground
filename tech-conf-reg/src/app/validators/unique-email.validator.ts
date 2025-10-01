import { AbstractControl, ValidationErrors } from "@angular/forms"
import { delay, Observable, of } from "rxjs"

export const uniqueEmailValidator = (control:AbstractControl):Observable<ValidationErrors | null> => {
  const isEmailTaken = control.value === "test@test.com";

  if(isEmailTaken)
    return of({"emailExists":true}).pipe(delay(1500));

  return of(null).pipe(delay(1500));
}