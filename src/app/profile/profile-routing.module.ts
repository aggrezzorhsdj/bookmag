import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'edit/:id', loadChildren: './profile-edit/profile-edit.module#ProfileEditModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes), FontAwesomeModule],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
