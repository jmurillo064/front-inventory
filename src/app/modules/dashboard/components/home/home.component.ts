import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/modules/shared/services/category.service';
import { LoginService } from 'src/app/modules/shared/services/login.service';
import { ProductService } from 'src/app/modules/shared/services/product.service';

export interface Category{
  description: string;
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  responsiveOptions: any;
  layout: string = 'list';
  products: any;
  token: string = '';

  terminoBusqueda: string = '';
  categoriaSeleccionada: string = '';
  categories: Category[] = [];


  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  dataSource = new MatTableDataSource<ProductElement>();

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(){
    this.productService.getProducts()
    .subscribe((data: any) => {
      console.log("Respuesta de productos: ", data);
      this.processProductResponse(data);
    }, (error: any) => {
      console.log("Error en productos: ", error);
    })
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe((data: any) => {
      console.log(data);
      this.categories = data.categoryResponse.category;
    },(error: any) => {
      console.log("Error al obtener la categorías: ", error);
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
    }
  }

  getSeverity (product: any) {
    if (product > 5) {
      return 'success';
    } else if (product <= 5 && product > 0) {
      return 'warning';
    } else if (product <= 0) {
      return 'danger';
    } else {
      return undefined; // En caso de que no haya severidad definida
    }
    };




  
}

export interface ProductElement{
  id: number;
  name: string;
  price: number;
  account: number;
  category: any;
  picture: any;
}