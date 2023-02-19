import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IAddresBook } from '../shared/models/AddressBook';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  baseUrl = 'https://localhost:7137/api/';
  addresBook? : IAddresBook[];
  errorMessage? : string;

  constructor(private http : HttpClient,private router: Router) { }

  //Get All address-book
  getAddressBook(){
    return this.http.get<IAddresBook[]>(this.baseUrl + 'addresBook').subscribe(response =>
      {
      this.addresBook = response;
    });
  }

  //Post address-book
  PostAddressBookt(){
    return this.http.post<IAddresBook[]>(this.baseUrl + 'AddresBooks',this.addresBook).subscribe(
      ()=> {
            this.router.navigate(['/address-book']);
           }, error => {
            this.errorMessage = error.message;
           });
           }

  //Put address-book
 PutAddressBook(){
    return this.http.put<IAddresBook[]>(this.baseUrl + 'AddresBooks/${this.addresBook.id}' ,this.addresBook ).subscribe(
      ()=> {
            this.router.navigate(['/address-book']);
           }, error => {
            this.errorMessage = error.message;
           });
  }

  //Delete address-book
  deleteAddressBook(){
    if (window.confirm('Are you sure you want to delete this addresBook?')) {
        this.http.delete<IAddresBook[]>(this.baseUrl+'AddresBooks/${this.addresBook.id}') .subscribe(
          () => {
            this.router.navigate(['/address-book']);
          },
          error => {
            this.errorMessage = error.message;
          });
        }
  }
}
