import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email?: string;
  password?: string;

   loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService ,private router: Router) { }

  ngOnInit(): void {
  }
 
  

  onSubmit() {
    this.authService.login(this.email!, this.password!);
  }
  goToRegisterComponent(){
    this.router.navigate(['/Register']) 
   }
}
