import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    UserComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class UserModule { }
