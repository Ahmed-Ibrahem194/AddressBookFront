import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department/department.service';
import { JobService } from 'src/app/job/job.service';
import { IAddresBook } from 'src/app/shared/models/AddressBook';
import { IDepatment } from 'src/app/shared/models/Depatment';
import { Ijob } from 'src/app/shared/models/job';
import { AddressBookService } from '../address-book.service';

@Component({
  selector: 'app-address-book-item',
  templateUrl: './address-book-item.component.html',
  styleUrls: ['./address-book-item.component.scss']
})
export class AddressBookItemComponent implements OnInit {

  book:IAddresBook = {
    id:0, 
    fullName:'',
    address : '',
    age : null!,
    birthOfDate:'',
    imageUrl : '',
    department : '',
    job :'',
    phoneNumber:null!
  };
  
  constructor(public service:AddressBookService ,
     public depService : DepartmentService,
     public jobService : JobService,
    ) { }

  ngOnInit(): void {
    this.depService.getDepartment();
    this.jobService.getJobs();
  }

  onSubmit(){
    this.service.addresBook = this.book as unknown as IAddresBook[];
    this.service.PostAddressBookt();
  }
}
