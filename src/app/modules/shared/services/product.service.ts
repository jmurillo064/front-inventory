import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8084/api/v1";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param param0 
   */
  getProducts(){
    const endpoint = `${base_url}/products`;
    console.log('URL completa:', endpoint);
    return this.http.get(endpoint);
  }

  /**
   * 
   * @param body 
   * @returns 
   */
  saveProduct(body: any){
    const endpoint = `${base_url}/products`;
    return this.http.post(endpoint, body);
  }

  /**
   * 
   * @param body 
   * @param id 
   * @returns 
   */
  updateProduct(body: any, id: any){
    const endpoint = `${base_url}/products/${id}`;
    return this.http.put(endpoint, body);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  deleteProduct(id: any){
    const endpoint = `${base_url}/products/${id}`;
    return this.http.delete(endpoint);
  }

  getProductByName(name: any){
    const endpoint = `${base_url}/products/filter/${name}`;
    return this.http.get(endpoint);
  }

}
