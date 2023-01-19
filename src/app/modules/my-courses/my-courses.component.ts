import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {

  products$ = new Observable<any>();
  id: number;

  constructor(private api: ApiService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

//show user's courses
    this.getCourses();
  }

  //convert base64 image for showing in ui
  transform(base64Image: string) {
    return 'data:image/jpg;base64,' +
      (this.sanitizer.bypassSecurityTrustResourceUrl(base64Image) as any).changingThisBreaksApplicationSecurity;

  }

  //get list of all courses 
  getCourses() {
    this.id=Number(window.localStorage.getItem('userId'));
    this.products$ = this.api.getById(this.id,'ProductUser');
  }

}
