import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('intercepting here...');
    //token variable
    const token = sessionStorage.getItem('token');
    if (
      sessionStorage.getItem('userName') &&
      sessionStorage.getItem('password') &&
      sessionStorage.getItem('token')
    ) {
      request = request.clone({
        //set header
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
