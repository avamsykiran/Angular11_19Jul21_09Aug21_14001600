import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './service/service.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorLoggerInterceptor } from './service/error-logger.interceptor';
import { ResponseTimeInterceptor } from './service/response-time.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:ErrorLoggerInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ResponseTimeInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
