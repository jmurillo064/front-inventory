import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CategoryModule } from '../category/category.module';
import { ProductModule } from '../product/product.module';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button'
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductosPipe } from './components/home/filter-productos.pipe';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    FilterProductosPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CategoryModule,
    ProductModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    ImageModule,
    DataViewModule,
    RatingModule,
    CardModule,
    ReactiveFormsModule,
    PanelModule,
    FormsModule
  ]
})
export class DashboardModule { }
