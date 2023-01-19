import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {


  signInValue: string='Sign In'
  showLogOutBtn: boolean=false;
  

  onOutletLoaded(event) {

    if (window.localStorage.getItem('userId')) {

      this.signInValue = 'Sign Out';
      this.showLogOutBtn = true;
    }
    else {
      this.signInValue = 'Sign In';
      this.showLogOutBtn = false;

    }
    
  }


}
