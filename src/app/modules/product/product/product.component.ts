import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProductService } from '../../shared/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { NewProductComponent } from '../new-product/new-product.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  ngOnInit(): void {
    this.getProducts();
  }

  displayedColums: string[] = ['id', 'name', 'price', 'account', 'category', 'picture', 'actions'];
  dataSource = new MatTableDataSource<ProductElement>();

  private productService = inject(ProductService);
  public dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  getProducts(){
    this.productService.getProducts()
    .subscribe((data: any) => {
      console.log("Respuesta de productos: ", data);
      this.processProductResponse(data);
    }, (error: any) => {
      console.log("Error en productos: ", error);
    })
  }

  processProductResponse(resp: any){
    const dateProduct: ProductElement[] = [];
    if(resp.metadata[0].code == "00") {
      let listCProduct = resp.productResponse.products;
      listCProduct.forEach((element: ProductElement) => {
        //element.category = element.category.name;
        element.picture = 'data:image/jpeg;base64,'+element.picture;
        dateProduct.push(element);
      });
      this.dataSource = new MatTableDataSource<ProductElement>(dateProduct);
      this.dataSource.paginator = this.paginator;
    }
  }

  openProductDialog(){
      const dialogRef = this.dialog.open(NewProductComponent, {
        width: '450px'
      });
  
      dialogRef.afterClosed().subscribe((result:any) => {
        if(result == 1){
          this.openSnackBar("Producto Agregado", "Exitoso");
          this.getProducts();
        }else if(result == 2){
          this.openSnackBar("Se produjo un error al guardar producto", "Error");
        }
      });
  }

  openSnackBar(mensaje: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(mensaje, action, {
      duration: 2000
    })
  }

  edit(id: number, name: string, price: number, account: number, category: any){
    const dialogRef = this.dialog.open(NewProductComponent, {
      width: '450px',
      data: {id: id, name: name, price: price, account: account, category: category}
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1){
        this.openSnackBar("Producto editado", "Exitoso");
        this.getProducts();
      }else if(result == 2){
        this.openSnackBar("Se produjo un error al editar producto", "Error");
      }
    });
  }

}

export interface ProductElement{
  id: number;
  name: string;
  price: number;
  account: number;
  category: any;
  picture: any;
}
