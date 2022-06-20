import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  // Department

  getDeptartmentList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + 'department/');
  }

  addDepartment(val: any) {
    return this.http.post(this.APIurl + 'department/', val);
  }

  updateDepartment(val: any) {
    return this.http.put(this.APIurl + 'department/', val);
  }

  deleteDepartment(val: any) {
    return this.http.delete(this.APIurl + 'department/' + val);
  }

  // EMPLOYEE 
  getEmployeeList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + 'employee/');
  }

  addEmployee(val: any) {
    return this.http.post(this.APIurl + 'employee/', val);
  }

  updateEmployee(val: any) {
    return this.http.put(this.APIurl + 'employee/', val);
  }

  deleteEmployee(val: any) {
    return this.http.delete(this.APIurl + 'employee/' + val);
  }

  uploadFile(val: any) {
    return this.http.post(this.APIurl + 'saveFile/', val)
  }

}
