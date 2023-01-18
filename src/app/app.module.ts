import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { LayoutComponent } from './home/layout/layout.component'
import { HomeModule } from './home/home.module';

import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { SignInPageComponent } from './authentication/sign-in-page/sign-in-page.component';


@NgModule({
  declarations: [
    AppComponent,LayoutComponent, AuthenticationComponent, SignInPageComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HomeModule
  
  ],
  exports:[SharedModule],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
