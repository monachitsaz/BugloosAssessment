import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    ,data :{ userId:window.localStorage.getItem('userId')}
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
