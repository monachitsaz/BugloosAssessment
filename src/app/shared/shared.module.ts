import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedRoutingModule } from './shared-routing.module';
import { ToastrModule } from 'ngx-toastr';
const COMPONENTs = []
const MODULES = [CommonModule,
  SharedRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,ToastrModule.forRoot(),]

  
@NgModule({
  declarations: [],
  imports: [
    MODULES
  ],
  exports: [COMPONENTs, MODULES],
  providers:[
    
  ]

  
})
export class SharedModule { }
