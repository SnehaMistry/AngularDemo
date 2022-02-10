import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  
  empLegendTitle : string = "Employee Personal Details";
  addressLegentTitle : string = "Address & Contact Details";
  firstname:string = "jigar";
  constructor() { }

  ngOnInit(): void {
  }

}
