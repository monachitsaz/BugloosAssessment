import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { SignUpComponent } from '../authentication/sign-up/sign-up.component';
import { LoginComponent } from '../authentication/login/login.component';

@NgModule({
  declarations: [
    LayoutFooterComponent, LayoutHeaderComponent,SignUpComponent,LoginComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports:[LayoutFooterComponent, LayoutHeaderComponent,SignUpComponent,LoginComponent]
})
export class HomeModule { }
