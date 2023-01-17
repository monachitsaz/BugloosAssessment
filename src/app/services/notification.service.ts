import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }
   
  showSuccess(message, title){
      this.toastr.success(message, title)
  }
   
  showError(message, title){
      this.toastr.error(message, title)
  }
   
  showInfo(message, title){
      this.toastr.info(message, title)
  }
   
  showWarning(message, title){
      this.toastr.warning(message, title)
  }

  showConfirmation(){
    var html = "<br /><br /><button type='button' class='btn clear'>Yes</button>";
    this.toastr.show(html,'Are You Sure?',
    {
      enableHtml: true,
    })
  }


}
