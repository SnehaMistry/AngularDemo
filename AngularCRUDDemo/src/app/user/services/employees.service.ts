import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  apilink :string

  constructor(private http : HttpClient) {
      this.apilink = environment.BaseURL;
   }

  getDepartment(): Observable<Department[]>
  {
    return this.http.get<Department[]>(`${this.apilink}/departments`);
  }

  saveEmployee(empDetails : Employee) : Observable<Employee>
  {
    return this.http.post<Employee>(`${this.apilink}/employee/`, empDetails);
  }
}
