import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent {

  isLogin: boolean = false;
  @Input() signInValue: string = 'Sign In'
  showLink: boolean = false;
  @Input() showLogOutBtn: boolean = false;
  @Input() userId: string;
  id: number;
  
  constructor(
    private router: Router) {

  }

//exit from site
  logOut() {
    if (confirm("Are you sure?")) {
      window.localStorage.clear();

      this.router.navigate(['sign-in']);
      this.signInValue = 'Sign In';
      this.showLink = false;
      this.showLogOutBtn=false;
    }
  }

  //enter user
  signIn() {
    this.router.navigate(['/']);
    this.signInValue = 'Sign Out';
    this.showLink = true;
    this.showLogOutBtn = true;
  }

}
