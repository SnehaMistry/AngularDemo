import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  genders=['male','female'];
  employeeForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
   }
  
  ngOnInit(): void {
    this.buildEmployeeForm();
    console.log(this.formControl);
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

  onSubmit(){
    debugger;
  
    console.log('hii');
  }

  check()
  {
    console.log('')
    console.log(this.formControl);
  }
  get formControl(){
    return this.employeeForm.controls;
  }
}
