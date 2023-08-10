import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/modules/shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  ngOnInit(): void {
    this.getCategories();
  }

  displayedColums: string[] = ['id', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource<CategoryElement>();

  private categoryService = inject(CategoryService);

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe((data: any) => {
        console.log("Respuesta: ", data);
        this.processCategoriesResponse(data);
      }, (error: any) => {
        console.log("Error: ", error);
      });
  }

  processCategoriesResponse(resp: any) {
    const dataCategory: CategoryElement[] = [];
    if(resp.metadata[0].code == "000") {
      let listCategory = resp.categoryResponse.category;
      listCategory.forEach((element: CategoryElement) => {
        dataCategory.push(element);
      });
      this.dataSource = new MatTableDataSource<CategoryElement>(dataCategory);
    }
  }

}

export interface CategoryElement {
  description: string;
  id: number;
  name: string;
}
