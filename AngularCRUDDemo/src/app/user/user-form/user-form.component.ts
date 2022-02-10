import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  id : number;
  departments : Department[];
  EmpDeatilsSave : Employee;

  constructor(private formBuilder: FormBuilder, private employeeService : EmployeesService, private route: ActivatedRoute ) {
   }
  
  ngOnInit(): void {
    this.buildEmployeeForm();
    this.getDepartments();

    this.id = this.route.snapshot.params['id'];
    this.editEmployeeForm();    
  }

  public buildEmployeeForm() {
    this.employeeForm = this.formBuilder.group({
      id:[],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phoneNo: [null,Validators.required ],
      gender: ['',[Validators.required]],
      birthdate: [null,Validators.required],
      department: [null,Validators.required]
    });
  }

  public getDepartments() {
    this.employeeService.getDepartment().subscribe({
      next : (v) => this.departments = v,
      error : (e)=> alert("Somethings Went Wrong" + e)
      });
  }

  public onSubmit(){
    this.submitted = true;
    if(this.employeeForm.valid)
    {
      const EmpDeatilsSave = this.employeeForm.value;
      if(EmpDeatilsSave.id)
      {
        this.editEmployee(EmpDeatilsSave);
      }
      else{
        this.createEmployee(EmpDeatilsSave);
      }
    }
  }

  public createEmployee(empDetails : Employee)
  {
      this.employeeService.saveEmployee(empDetails).subscribe({
        next : v => {
          this.resetForm();
        }
      });  
  }

  public editEmployeeForm()
  {    
    if(this.id)
    {
      this.employeeService.getByEmployeeId(this.id)
      .subscribe(x => this.employeeForm.patchValue(x));
    }
  }

  public editEmployee(empDetails : Employee)
  {
    this.employeeService.updateEmployee(empDetails).subscribe({
      next : v =>{
        this.resetForm();
      }
    });  
  }

  get formControl(){
    return this.employeeForm.controls;
  }

  resetForm(){
    this.employeeForm.reset();
  }
}
