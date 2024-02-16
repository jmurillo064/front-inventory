import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';

import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    SidenavComponent,
    ConfirmComponent,
    LogoutComponent
  ],
  exports: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    RouterModule, 
    HttpClientModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    TooltipModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true}
  ]
})
export class SharedModule { }
