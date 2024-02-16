// filter-productos.pipe.ts

import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'filterProductos'
})
export class FilterProductosPipe implements PipeTransform {


  /*
  transform(productos: any[], term: string): any[] {
    if (!term) return productos;
    return productos.filter(producto => producto.name.toLowerCase().includes(term.toLowerCase()));
  }*/

  
  transform(productos: any[], term: string, categoria: string): any[] {
    let resultado = productos;

    // Filtrar por término de búsqueda
    if (term) {
      resultado = resultado.filter(producto =>
        producto.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (categoria) {
      resultado = resultado.filter(producto => producto.category.name === categoria );
    }
    return resultado;
  }
}
