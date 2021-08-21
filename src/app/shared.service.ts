import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl = 'https://crudwebapianimeshibm.azurewebsites.net/api';

  constructor(private http:HttpClient) { }

//code for Employee
  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/Employees');
  }
  addEmployee(val:any){
    return this.http.post<any>(this.ApiUrl+'/Employees',val);
  }
  editEmployee(val:any){
      const payload = {name:val.name,dept:val.dept};
      return this.http.put<any>(this.ApiUrl+'/Employees/'+val.id,payload);  
  }
  deleteEmployee(val:any){
    return this.http.delete<any>(this.ApiUrl+'/Employees/'+val);
  }

//code for Department
  getDepList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/Department');
  }
  addDepartment(val:any){
    return this.http.post<any>(this.ApiUrl+'/Department',val);
  }
  // editDepartment(val:any){
  //     return this.http.put<any>(this.ApiUrl+'/Department',val);  
  //}
  editDepartment(val:any){
    const payload = {deptName:val.deptName};
    return this.http.put<any>(this.ApiUrl+'/Department/'+val.deptId,payload);
  }
  deleteDepartment(val:any){
    return this.http.delete<any>(this.ApiUrl+'/Department/'+val);
  }

  //Get All Departmentment
  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl+'/Employee/GetAllDepartmentNames')
  }
}
