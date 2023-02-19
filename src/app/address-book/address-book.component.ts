import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../department/department.service';
import { JobService } from '../job/job.service';
import { IAddresBook } from '../shared/models/AddressBook';
import { AddressBookService } from './address-book.service';
import * as XLSX from 'xlsx';

declare var $: any;

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {
  addresBook? : IAddresBook;
  
  constructor(public service : AddressBookService , private router: Router,
    public depService : DepartmentService,
     public jobService : JobService,) { }

  ngOnInit(): void {
    //Get All AddressBook
    this.service.getAddressBook();
    $('#datepicker').datepicker();
  };

// open the modal dialog
  openEditDialog(addresBook? : IAddresBook) {
    this.addresBook = addresBook;
  };
  
  goToBookItemComponent(){
  this.router.navigate(['/AddressBook-item']);
};

//update AddressBook
updateJob(){
  this.service.PutAddressBook()
};

//Delete AddressBook
deleteJob(){
  this.service.deleteAddressBook();
};

//exportDataToExcel/
exportTableToExcel(tableId: string, fileName: string): void {
  const AddressTable = document.getElementById(tableId);
  const wb = XLSX.utils.table_to_book(AddressTable, { sheet: fileName });
  XLSX.writeFile(wb, fileName + '.xlsx');
}

}
