import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressBookItemComponent } from './address-book/address-book-item/address-book-item.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { DeprtmentItemComponent } from './department/deprtment-item/deprtment-item.component';
import { JobItemComponent } from './job/job-item/job-item.component';
import { JobComponent } from './job/job.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'LoginComponent',
    pathMatch:'full',
  },
  {
    path:'job',
    component:JobComponent,
    pathMatch:'full',
  },
  {
    path:'department',
    component:DepartmentComponent,
    pathMatch:'full',
  },
  {
    path:'address-book',
    component:AddressBookComponent,
    pathMatch:'full',
  },
  {
    path:'job-item',
    component:JobItemComponent, 
    pathMatch:'full',
  },
  {
    path:'department-item',
    component:DeprtmentItemComponent,
    pathMatch:'full',
  },
  {
    path:'AddressBookItem-item',
    component:AddressBookItemComponent, 
    pathMatch:'full',
  },
  {
    path:'Register',
    component:  RegisterComponent, 
    pathMatch:'full',
  },
  {
    path:'app',
    component: AppComponent, 
    pathMatch:'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
