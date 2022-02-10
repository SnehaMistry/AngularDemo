import { Pipe, PipeTransform } from '@angular/core';
import { Department } from 'src/app/user/models/department.model';
import { Employee } from 'src/app/user/models/employee.model';

@Pipe({
  name: 'department'
})
export class DepartmentPipe implements PipeTransform {

  transform(value: string, dept : Department) : string {
      if(dept.id == value)
      {
        return dept.deptname;
      }
      else{
        return null;
      }
  }

}
