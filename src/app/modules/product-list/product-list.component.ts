import { ISelectedProducts } from './../../models/selected-products.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products$ = new Observable<any>();
  courseAdded: boolean = false;
  selectedProducts: ISelectedProducts[] = [];
  userIsLogIn: boolean = false;
  userId: string | null = localStorage.getItem('userId');

  constructor(private api: ApiService,
    private sanitizer: DomSanitizer,
    private noti: NotificationService,
    private router: Router) { }

  ngOnInit(): void {

    //to check if user has been logged in or not, if yes is allowed to add course
    this.userId ? this.userIsLogIn = true : this.userIsLogIn = false;

    //show all courses
    this.getCourses();
  }

  //convert base64 image for showing in ui
  transform(base64Image: string) {
    return 'data:image/jpg;base64,' +
      (this.sanitizer.bypassSecurityTrustResourceUrl(base64Image) as any).changingThisBreaksApplicationSecurity;

  }

  //get list of all courses 
  getCourses() {
    this.products$ = this.api.getList('Product');
  }

  //select course to add to list of the user
  selectCourse(event, item) {
    let userId = Number(window.localStorage.getItem('userId'))

    if (event.returnValue == true) {
      this.selectedProducts.push({ productId: item.id, userId: userId })
    }
    else {
      this.selectedProducts.forEach((e, i) => {
        if (e.productId == item.id) delete this.selectedProducts[i]
      })
    }
  }

  //save selected courses by user
  saveCourses() {
    this.api.create(this.selectedProducts, 'ProductUser').subscribe({
      next: (res) => {
        this.noti.showSuccess(res, 'Info')
        let userId = localStorage.getItem('userId')
        this.router.navigateByUrl(`/courses/my-courses/${userId}`, { state: { userId } });
      },
      error: (err: HttpErrorResponse) => { this.noti.showError(err, 'oops!') }
    })
  }

}
