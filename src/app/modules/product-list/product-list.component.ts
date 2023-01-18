import { IUser } from './../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IProduct } from 'src/app/models/product.interface';
import { ApiService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products$ = new Observable<any>();
  id
  productModel: IProduct
  courseAdded: boolean = false;
  buttonValue: string = 'Add it!'
  toggleButton: boolean;
  items: number[] = []
  constructor(private api: ApiService,
    private sanitizer: DomSanitizer, private noti: NotificationService) { }

  ngOnInit(): void {
    this.getLibrary();

  }
  transform(base64Image: string) {
    return 'data:image/jpg;base64,' +
      (this.sanitizer.bypassSecurityTrustResourceUrl(base64Image) as any).changingThisBreaksApplicationSecurity;

  }
  getLibrary() {
    this.products$ = this.api.getList('Product');

  }

  selectCourse(event, item) {
    console.log(event)
    if (event.returnValue == true) {
      this.items.push(item.id)
    }
    else {
      this.items.forEach((e, i) => {
        if (e == item.id) delete this.items[i]
      })
    }
    // console.log(id)
    // toggleButton=!toggleButton

    if (!this.courseAdded) {
      event.currentTarget.classList.remove('btn-primary');

      event.currentTarget.classList.add('btn-success');
      event.currentTarget.innerText = 'Added';
    }
    else {
      event.currentTarget.classList.remove('btn-success');
      event.currentTarget.classList.add('btn-primary');
      event.currentTarget.innerText = 'Add it!';
    }


    // }
    // else{
    //   event.currentTarget.classList.remove('btn-success');
    //   event.currentTarget.classList.add('btn-primary');
    //   event.currentTarget.innerText = 'Add it';
    // }

    // event.currentTarget.setAttribute('class', 'active');

    let elements = document.querySelectorAll('.course-item');

    elements.forEach((el, index) => {
      // console.log(el)


      // el.children[3].classList.remove('btn-primary');
      // el.children[3].classList.add('btn-success');
      // event.currentTarget.classList.remove('btn-primary');
      // event.currentTarget.classList.add('btn-success');
      // event.currentTarget.innerText = 'Added';


      // el.classList.add('image-libray');
    })
    // if (!this.courseAdded) {
    //   event.currentTarget.classList.value = 'btn btn-sm btn-primary col-12';
    //   event.currentTarget.innerText = 'Add it!';
    // }
    // else {
    //   event.currentTarget.classList.value = 'btn btn-sm btn-success col-12';
    //   event.currentTarget.innerText = 'Added!';

    // }




  }
  saveCourses() {

    this.api.create(this.items, 'ProductUser')
  }

  selectId(event, id: number, i: number) {
    // console.log(event.currentTarget);
    // this.selectImaged=true
    //به منظور تغییر استایل در داخل کامپوننت
    let elements = document.querySelectorAll('img.active');
    elements.forEach(el => {
      el.classList.remove('active');
      el.classList.add('image-libray');
    })
    // document.querySelector("img.active").classList.remove("active");
    event.currentTarget.setAttribute('class', 'active');
    this.api.getById(id, 'Product').subscribe((response: IProduct) => {
      this.id = response.id
      this.productModel = response
    })

  }


}
