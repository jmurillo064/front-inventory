import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { FilterProductPipe } from './product/filter-product.pipe';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [
    ProductComponent,
    NewProductComponent,
    FilterProductPipe
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule
  ]
})
export class ProductModule { }
