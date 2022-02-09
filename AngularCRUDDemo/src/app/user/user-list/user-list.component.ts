import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  employeeList : Employee;
  constructor(private employeeService : EmployeesService) { }

  ngOnInit(): void {
      this.getEmployeeList();
  }

  getEmployeeList()
  {
    this.employeeService.getEmployee().subscribe({
      next : empList => {
        this.employeeList = empList;
        console.log(empList);
      }
    })
  }


}
