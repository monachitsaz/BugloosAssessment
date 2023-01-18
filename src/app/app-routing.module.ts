import { LayoutComponent } from './home/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  {
    path:'',component:LayoutComponent,
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)

  },

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
