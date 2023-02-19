import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IDepatment } from '../shared/models/Depatment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl = 'https://localhost:7137/api/';
  department? : IDepatment[];
  errorMessage? : string;

  constructor(private http : HttpClient,private router: Router) { }

  //Get All Department
  getDepartment(){
    return this.http.get<IDepatment[]>(this.baseUrl + 'Departments').subscribe(response =>
      {
      this.department = response;
    });
  }

  //Post Department
  PostDepartment(){
    return this.http.post<IDepatment[]>(this.baseUrl + 'Departments',this.department).subscribe(
      ()=> {
            this.router.navigate(['/department']);
           }, error => {
            this.errorMessage = error.message;
           });
           }

  //Put Department
 PutDepartment(){
    return this.http.put<IDepatment[]>(this.baseUrl + 'Departments/${this.department.id}' ,this.department ).subscribe(
      ()=> {
            this.router.navigate(['/department']);
           }, error => {
            this.errorMessage = error.message;
           });
  }

  //Delete Department
  deleteDepartment(){
    if (window.confirm('Are you sure you want to delete this department?')) {
        this.http.delete<IDepatment[]>(this.baseUrl+'Departments/${this.department.id}') .subscribe(
          () => {
            this.router.navigate(['/department']);
          },
          error => {
            this.errorMessage = error.message;
          });
        }
  }
}
