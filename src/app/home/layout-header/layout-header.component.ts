import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent implements OnInit {
  isLogin: boolean = false;
  signInValue: string = 'Sign In'
  
  ngOnInit(): void {
    if (localStorage.getItem('userId')) {
      this.isLogin == true;
      this.signInValue='Sign Out'
    }
  }

  logOut() {
    if (confirm("Are you sure?")) {
      window.localStorage.clear();
      window.location.reload();
    }
  }

}
