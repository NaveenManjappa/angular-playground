import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor() { }

  isRoleTaken(role:string) {
    return of(false);
  }
}
