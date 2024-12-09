import { Observable } from "rxjs";

export interface ActorInterface {
  isRoleTaken: (role:string) => Observable<boolean>;
}