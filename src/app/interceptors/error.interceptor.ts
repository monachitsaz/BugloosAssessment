import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor() { }


    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(httpRequest).pipe(
            catchError((err: HttpErrorResponse) => {
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