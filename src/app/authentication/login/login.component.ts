import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { NotificationService } from '../../services/notification.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup:FormGroup
  @Output() isLogin = new EventEmitter();
  constructor(private noti:NotificationService,
    private api:ApiService,private router:Router
    ){

  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(2)]),
    })
    
  }
  login() {
    if (!this.formGroup.valid) {
      this.noti.showError("Data is wrong", "oops!")
    }
    else {
debugger
      let username = this.formGroup.controls.username.value;
      let password = this.formGroup.controls.password.value;

      this.api.login(username, password).subscribe({
        next: (result) => {
          this.setAuthenticationStorage(result);
          this.router.navigate(['courses']);
        },
        error: (err: HttpErrorResponse) => {
          this.noti.showError(err, "oops!")
          this.formGroup.reset();
        }
      })
    }
  }

  setAuthenticationStorage(data: IUser) {   
    window.localStorage.setItem('user-info', JSON.stringify(data));
    window.localStorage.setItem('userId', data.id.toString());
  }
}
