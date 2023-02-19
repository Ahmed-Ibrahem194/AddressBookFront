import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://localhost:7137/api/';
  errorMessage? : string;

  constructor(private http : HttpClient,private router: Router) { }

 //Register
  register(email: string, password: string , confirmPassword:string) {
    return this.http.post('/api/Register', { email, password , confirmPassword})
    .subscribe(response => {
      this.router.navigate(['/App']);
    }, error => {
      this.errorMessage = error.message;
    });;
  }

  //Login
  login(email: string, password: string) {
    return this.http.post('/api/Login', { email, password })
    .subscribe(response => {
      this.router.navigate(['/App']);
    }, error => {
      this.errorMessage = error.message;
    });
  }
}
