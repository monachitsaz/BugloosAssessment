import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NotificationService } from '../services/notification.service';

export const delayMs = 2000;
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(

        private noti: NotificationService
    ) { }


    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(httpRequest).pipe(
            catchError((err: HttpErrorResponse) => {
                // this.ngxService.stopAll();
                var message = "";
                const error = err.error || err.statusText;
                if (err.status === 400) {
                    message = 'The data you have sent is not valid';

                }
                else if (err.status === 500) {
                    if (err.error.match('نام کاربری تکراری است')) {
                        message = 'Username has already taken', 'oops!';

                    }
                    else {
                        message = 'internal server error ', 'oops!';

                    }
                }
                else if (err.status === 401) {
                    message = 'You are not authorized', 'oops!';
                }
                return throwError(() => message);
            })
        );
    }
}