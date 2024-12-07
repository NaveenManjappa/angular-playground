import { Routes } from '@angular/router';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

export const routes: Routes = [
  { 
    path:'actor',component:ActorFormComponent
  },
  {
    path:'profile',component:ProfileEditorComponent
  }
];
