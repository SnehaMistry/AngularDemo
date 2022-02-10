import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public employeeList : Employee[];
  public departments : Department[];
  constructor(private employeeService : EmployeesService, private router : Router) { }

  ngOnInit(): void {
      this.getDepartments();
      this.getEmployeeList();
  }

  public getEmployeeList()
  {
    this.employeeService.getEmployees().subscribe((employee : Employee[]) => {
        this.employeeList = employee;
    });
    
  }

  public getDepartments()
  {
    this.employeeService.getDepartment().subscribe({
      next : (v) => this.departments = v,
      error : (e)=> alert("Somethings Went Wrong" + e)
      });
  }

  public editEmployee(empId : number)
  {
    this.router.navigate(['user/user-form/'+empId]);
  }

  public deleteEmployee(empId : number)
  {
    this.employeeService.deleteEmployeeDetail(empId).subscribe({
      next : (v) => {console.log('hii'); this.getEmployeeList();},
      error : (e)=> alert("Somethings Went Wrong" + e)
    });
  }

}
