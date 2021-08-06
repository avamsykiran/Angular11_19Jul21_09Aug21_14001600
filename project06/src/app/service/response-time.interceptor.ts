import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ResponseTimeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let start = new Date();
    return next.handle(request).pipe(
      tap(resp => {
        let end = new Date();
        let duration = end.getMilliseconds()-start.getMilliseconds();
        console.log(`Got the resposne within ${duration} ms`)
      })
    );
  }
}
