import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDepatment } from '../shared/models/Depatment';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  department? : IDepatment;
 
  constructor(public departmentService : DepartmentService ,private router: Router) { }

  ngOnInit(): void {
    //Get All department
    this.departmentService.getDepartment();
  };

// open the modal dialog
  openEditDialog(department? : IDepatment) {
    this.department = department;
  }
  
goToDepartmentItemComponent() {
  this.router.navigate(['/department-item']);
};

//update Department
updateDepartment(){
  this.departmentService.PutDepartment()
};

//Delete Department
deleteDepartment(){
  this.departmentService.deleteDepartment();
};

}
