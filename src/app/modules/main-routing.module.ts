import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCoursesComponent } from './my-courses/my-courses.component';

const routes: Routes = [
  {
    path:'all',component:ProductListComponent
  },
  {
    path: '', redirectTo: '/all', pathMatch: 'full'
  },
  {
    path:'my-courses/:id',component:MyCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
