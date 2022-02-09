import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  genders=['male','female'];
  employeeForm: FormGroup;
  submitted = false;
  departments : Department[];
  EmpDeatilsSave : Employee;
  constructor(private formBuilder: FormBuilder, private employeeService : EmployeesService ) {
   }
  
  ngOnInit(): void {
    this.buildEmployeeForm();
    this.getDepartments();
  }

  public buildEmployeeForm() {
    this.employeeForm = this.formBuilder.group({
      id:[],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phoneNo: [null,Validators.required ],
      gender: ['',[Validators.required]],
      birthday: [null,Validators.required],
      department: [null,Validators.required]
    });
  }

  getDepartments() {
    this.employeeService.getDepartment().subscribe({
      next : (v) => this.departments = v,
      error : (e)=> alert("Somethings Went Wrong" + e)
      });
  }

  onSubmit(){
    this.submitted = true;
    if(this.employeeForm.valid)
    {
      const EmpDeatilsSave = this.employeeForm.value;
      if(EmpDeatilsSave.id)
      {
        // this.updateEmployee();
      }
      else{
        this.createEmployee(EmpDeatilsSave);
      }
    }
  }

  createEmployee(empDetails : Employee)
  {
      this.employeeService.saveEmployee(empDetails).subscribe({
        next : v => {
          console.log(v);
        }
      })  
  }
  get formControl(){
    return this.employeeForm.controls;
  }
}
