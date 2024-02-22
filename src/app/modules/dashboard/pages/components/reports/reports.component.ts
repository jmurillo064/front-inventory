import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from 'src/app/modules/shared/services/product.service';
import { ProductElement } from '../../../components/home/home.component';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  chartBar: any;
  private productService = inject(ProductService);


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe((data: any) => {
        console.log("Respuesta de productos: ", data);
        this.processProductResponse(data);
      }, (error: any) => {
        console.log("Error en productos: ", error);
      })
  }

  processProductResponse(resp: any) {
    const nameProduct: String[] = [];
    const account: number[] = [];
    if (resp.metadata[0].code == "00") {
      let listCProduct = resp.productResponse.products;
      listCProduct.forEach((element: ProductElement) => {
        nameProduct.push(element.name);
        account.push(element.account);
      });

      this.chartBar = new Chart('canvas-bar', {
        type: 'bar',
        data:{
          labels:nameProduct,
          datasets:[
            {label:'Products', data: account}
          ]
        }
      });

    }
  }

}
