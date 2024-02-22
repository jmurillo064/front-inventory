import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from '../category/components/category/category.component';
import { ProductComponent } from '../product/product/product.component';
import { ReportsComponent } from './pages/components/reports/reports.component';
import { loguearseGuard } from '../guards/loguearse.guard';

const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'category', component: CategoryComponent, canActivate: [loguearseGuard] },
    { path: 'product', component: ProductComponent, canActivate: [loguearseGuard] },
    { path: 'reports', component: ReportsComponent, canActivate: [loguearseGuard] },
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule],
})
export class RouterChildModule { }
