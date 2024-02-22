import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './modules/dashboard/dashboard-routing.module';
import { LoginComponent } from './modules/login/login/login.component';
import { guardGuard } from './modules/guards/guard.guard';
import { DashboardComponent } from './modules/dashboard/pages/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'dashboard' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: false, useHash: true}
    ),
    DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
