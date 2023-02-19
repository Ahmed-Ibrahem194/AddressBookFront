import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email?: string;
  password?: string;
  confirmPassword?: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.authService.register(this.email!, this.password!, this.confirmPassword!)
  }

  
}
