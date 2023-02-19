import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ijob } from '../shared/models/job';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  baseUrl = 'https://localhost:7137/api/';
  job? : Ijob[];
  errorMessage? : string;

  constructor(private http : HttpClient,private router: Router) { }

  //Get All Jobs
  getJobs(){
    return this.http.get<Ijob[]>(this.baseUrl + 'Jobs').subscribe(response =>
      {
      this.job = response;
    });
  }

  //Post Job
  PostJob(){
    return this.http.post<Ijob[]>(this.baseUrl + 'Jobs',this.job).subscribe(
      ()=> {
            this.router.navigate(['/job']);
           }, error => {
            this.errorMessage = error.message;
           });
           }

  //Put Job
 PutJob(){
    return this.http.put<Ijob[]>(this.baseUrl + 'Jobs/${this.job.id}' ,this.job ).subscribe(
      ()=> {
            this.router.navigate(['/job']);
           }, error => {
            this.errorMessage = error.message;
           });
  }

  //Delete Job
  deleteJob(){
    if (window.confirm('Are you sure you want to delete this job?')) {
        this.http.delete<Ijob[]>(this.baseUrl+'Jobs/${this.job.id}') .subscribe(
          () => {
            this.router.navigate(['/jobs']);
          },
          error => {
            this.errorMessage = error.message;
          });
        }
  }
}
