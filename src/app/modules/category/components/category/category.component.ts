import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/modules/shared/services/category.service';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { ConfirmComponent } from 'src/app/modules/shared/components/confirm/confirm.component';

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
  public dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

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
    console.log(resp);
    const dataCategory: CategoryElement[] = [];
    if(resp.metadata[0].code == "00") {
      let listCategory = resp.categoryResponse.category;
      listCategory.forEach((element: CategoryElement) => {
        dataCategory.push(element);
      });
      this.dataSource = new MatTableDataSource<CategoryElement>(dataCategory);
    }
  }

  openCategoryDialoge() {
    const dialogRef = this.dialog.open(NewCategoryComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
        this.openSnackBar("Categoría Agregada", "Exitosa");
        this.getCategories();
      }else if(result == 2){
        this.openSnackBar("Se produjo un error al guardar categoría", "Error");
      }
    });
  }

  edit(id: number, name: string, description: string){
    const dialogRef = this.dialog.open(NewCategoryComponent, {
      width: '450px',
      data: {id: id, name: name, description: description}
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
        this.openSnackBar("Categoría Actualizada", "Exitosa");
        this.getCategories();
      }else if(result == 2){
        this.openSnackBar("Se produjo un error al editar categoría", "Error");
      }
    });
  }

  eliminate(id: number){
    console.log(id);
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
        this.openSnackBar("Categoría Eliminada", "Exitosa");
        this.getCategories();
      }else if(result == 2){
        this.openSnackBar("Se produjo un error al eliminar categoría", "Error");
      }
    });
  }

  buscar(termino: string){
    console.log(termino);
    if(termino.length === 0){
      return this.getCategories();
    }

    this.categoryService.getCategoryId(termino)
    .subscribe((resp: any)=> {
      this.processCategoriesResponse(resp);
    }, (error: any) => {
      this.openSnackBar("Categoría no encontrada", "No exitosa");
    })

  }

  openSnackBar(mensaje: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(mensaje, action, {
      duration: 2000
    })
  }

}

export interface CategoryElement {
  description: string;
  id: number;
  name: string;
}
