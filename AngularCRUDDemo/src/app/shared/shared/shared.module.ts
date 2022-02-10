import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentPipe } from './department.pipe';



@NgModule({
  declarations: [
    DepartmentPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DepartmentPipe
  ],
})
export class SharedModule { }
