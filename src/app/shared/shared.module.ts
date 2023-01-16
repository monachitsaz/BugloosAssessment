import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedRoutingModule } from './shared-routing.module';

const COMPONENTs = []
const MODULES = [CommonModule,
  SharedRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule]

  
@NgModule({
  declarations: [],
  imports: [
    MODULES
  ],
  exports: [COMPONENTs, MODULES]
})
export class SharedModule { }
