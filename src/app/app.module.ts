import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { AppRoutingModule } from './app-routing.module';
import { DepartmentComponent } from './department/department.component';
import { JobComponent } from './job/job.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { JobItemComponent } from './job/job-item/job-item.component';
import { DeprtmentItemComponent } from './department/deprtment-item/deprtment-item.component';
import { AddressBookItemComponent } from './address-book/address-book-item/address-book-item.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    JobComponent,
    DepartmentComponent,
    AddressBookComponent,
    RegisterComponent,
    LoginComponent,
    JobItemComponent,
    DeprtmentItemComponent,
    AddressBookItemComponent, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModalModule,
    NgSelectModule,
    FormControl,
    FormGroup,
    Validators,
    BsDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
