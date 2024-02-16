import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { TableModule } from 'primeng/table';
import { FilterCategoriesPipe } from './components/category/filter-category.pipes';


@NgModule({
  declarations: [
    CategoryComponent,
    NewCategoryComponent,
    FilterCategoriesPipe
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ]
})
export class CategoryModule { }
