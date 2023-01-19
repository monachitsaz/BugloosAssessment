import { LayoutComponent } from './home/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',component:LayoutComponent,
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
    , data :{ userId:window.localStorage.getItem('userId')}

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
