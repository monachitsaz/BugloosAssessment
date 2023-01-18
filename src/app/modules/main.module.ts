import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from '../authentication/login/login.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';


@NgModule({
  declarations: [
    ProductListComponent,
    MyCoursesComponent, 
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
