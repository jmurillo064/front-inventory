import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoriesPipe implements PipeTransform {

    transform(productos: any[], term: string, description: string): any[] {
        let resultado = productos;
        // Filtrar por término de búsqueda
        if (term) {
            resultado = resultado.filter(producto =>
            producto.name.toLowerCase().includes(term.toLowerCase())
            );
        }
    
        // Filtrar por categoría
        if (description) {
            resultado = resultado.filter(producto => 
                producto.description.toLowerCase().includes(description.toLowerCase()));
        }
        return resultado;
    }

}