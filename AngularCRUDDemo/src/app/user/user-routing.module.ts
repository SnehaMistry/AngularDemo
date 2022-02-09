import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-form', component: UserFormComponent },
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
