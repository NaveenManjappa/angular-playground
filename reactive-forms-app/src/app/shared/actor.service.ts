import { Injectable } from '@angular/core';
import { ActorInterface } from './actor-interface';
import { ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService implements ActorInterface {

  constructor() { }

  isRoleTaken(role:string): Observable<boolean> {
    return of(true);
  }
}
