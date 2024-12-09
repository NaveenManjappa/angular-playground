import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import { ActorService } from "./actor.service";

@Injectable({providedIn:'root'})
export class UniqueRoleValidator implements AsyncValidator {
  
  constructor(private actorService:ActorService) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.actorService.isRoleTaken(control.value).pipe(
      map(isTaken => {
        return isTaken ? { uniqueRole: true } : null
      }),
      catchError(()=>of(null))
    );
  }
  
}