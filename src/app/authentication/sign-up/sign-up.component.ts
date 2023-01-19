import { NotificationService } from '../../services/notification.service';
import { IUser } from 'src/app/models/user.model';
import { ApiService } from '../../services/api.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formGroup: FormGroup;
  @Output() isSignup = new EventEmitter();


  constructor(private api: ApiService, 
    private notification:NotificationService,
    private router:Router) {

  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      id: new FormControl(0),
      userName: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      confirmPassword: new FormControl('', Validators.required),
      gender: new FormControl('male'),
      formIsChecked: new FormControl(true)
    })
  }



  registerUser() {
    if (this.formGroup.controls.password.value == this.formGroup.controls.confirmPassword.value) {
      let infoData = {     
        userName: this.formGroup.controls.userName.value,
        password: this.formGroup.controls.password.value,
        email: this.formGroup.controls.email.value,
        gender: this.formGroup.controls.gender.value,
      }
     
      this.api.create(infoData, "User")
        .subscribe(
          {
            next: (response) => {
              this.notification.showSuccess(response,'Info');
               this.isSignup.emit();
              this.router.navigate(['sign-in']);
            },
            error: (error: HttpErrorResponse) => {
              this.notification.showError(error,'oops!')
            }
          }
        )
      this.formGroup.reset();
      this.formGroup.controls.formIsChecked.setValue(true);
      this.formGroup.controls.gender.setValue('male');
    }
    else {
      this.notification.showError("Password does'nt match",'oops!')
    }
  }

  
 
}
