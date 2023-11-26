import { HttpClient } from '@angular/common/http';
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
    return this.http.get(endpoint);
  }

}
