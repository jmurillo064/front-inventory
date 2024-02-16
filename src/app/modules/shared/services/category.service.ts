import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8084/api/v1";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  /**
   * get all categories
   * @returns 
   */
getCategories() {
  const endpoint = `${base_url}/categories`;
  let httpHeaders= new HttpHeaders();
  httpHeaders.append('Content-Type', 'application/json');
  httpHeaders.append("Authorization", "Basic " + btoa("jmurillo:password123"));

  const httpOptions = {
    headers: httpHeaders
  };
  return this.http.get(endpoint, httpOptions);

}

/**
 * Saved categories
 */

saveCategorie(body: any) {
  const endpoint = `${base_url}/categories`;
  return this.http.post(endpoint, body);
}

/**
 * update category
 */
updateCategory(body: any, id:any){
  const endpoint = `${base_url}/categories/${id}`;
  return this.http.put(endpoint, body);
}

/**
 * delete category
 */
deleteCategory(id:any){
  const endpoint = `${base_url}/categories/${id}`;
  return this.http.delete(endpoint);
}

/**
 * get category
 */
getCategoryId(id:any){
  const endpoint = `${base_url}/categories/${id}`;
  return this.http.get(endpoint);
}

}
