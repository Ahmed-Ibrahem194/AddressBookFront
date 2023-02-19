import { Component, OnInit } from '@angular/core';
import { IDepatment } from 'src/app/shared/models/Depatment';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-deprtment-item',
  templateUrl: './deprtment-item.component.html',
  styleUrls: ['./deprtment-item.component.scss']
})
export class DeprtmentItemComponent implements OnInit {
  department : IDepatment = {
    id : null!,
    depName :'',
  };

  constructor(public departmentService:DepartmentService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.departmentService.department = this.department as unknown as IDepatment[];
    this.departmentService.PostDepartment();
  }

}
