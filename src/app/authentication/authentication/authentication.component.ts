import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit{
  isRegistered: boolean = false;
  signInValue: string = 'Sign In'


  ngOnInit(): void {
    if (localStorage.getItem('userId')) {
      this.isRegistered == true;
      this.signInValue='Sign Out'
    }
  }

  
  setAuthenticate() {
    this.isRegistered = true
  }
}
