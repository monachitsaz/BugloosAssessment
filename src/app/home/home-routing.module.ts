import { SignUpComponent } from '../authentication/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../authentication/login/login.component';
import { AuthenticationComponent } from '../authentication/authentication/authentication.component';
import { SignInPageComponent } from '../authentication/sign-in-page/sign-in-page.component';

const routes: Routes = [
  
  {
    path:'register',component:AuthenticationComponent
  },
  {
    path: '', redirectTo: '/register', pathMatch: 'full'
  },
  {
    path:'sign-in',component:SignInPageComponent
  },
  {
    path:'courses',
    loadChildren:()=>import('../modules/main.module').then(m=>m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
