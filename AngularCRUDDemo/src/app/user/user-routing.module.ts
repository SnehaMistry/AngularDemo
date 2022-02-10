import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'user-list', pathMatch: 'full' },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-form', component: UserFormComponent },
      { path: 'user-form/:id', component: UserFormComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
