import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  apilink :string
  empToEdit: Subject<Employee> = new Subject<Employee>();
  constructor(private http : HttpClient) {
      this.apilink = environment.BaseURL;
   }

  getDepartment(): Observable<Department[]>
  {
    return this.http.get<Department[]>(`${this.apilink}/departments`);
  }

  saveEmployee(empDetails : Employee) : Observable<Employee>
  {
    return this.http.post<Employee>(`${this.apilink}/employee`, empDetails);
  }

  getEmployees() : Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.apilink}/employee`);
  }

  getByEmployeeId(empId : number) : Observable<Employee>
  {
    return this.http.get<Employee>(`${this.apilink}/employee/${empId}`);
  }

  updateEmployee(empDetails : Employee) : Observable<Employee>
  {
    return this.http.put<Employee>(`${this.apilink}/employee/${empDetails.id}`, empDetails);
  }

  deleteEmployeeDetail(empId : number) : Observable<Employee>
  {
    return this.http.delete<Employee>(`${this.apilink}/employee/${empId}`);
  }
}
